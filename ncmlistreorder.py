import time
import json
import requests
from tqdm import tqdm

from_cache = False
playlist_id = 'your playlist id'
instance = requests.Session()
instance.cookies.set('MUSIC_U', 'your cookie')
instance.cookies.set('NMTID', 'your cookie')

def get(url, withTimestamp=False):
    while True:
        try:
            timestamp = '&timestamp=' + str(int(time.time() * 1000)) if withTimestamp else ''
            res = instance.get('http://127.0.0.1:3000' + url + timestamp)
            res.encoding = 'utf-8'
            data = res.json()
            if data['code'] != 200:
                raise RuntimeError(f'{data["code"]} {data["message"]}')
            time.sleep(1.0)
            return data
        except Exception as e:
            print(f'请求 {url} 失败, 错误: {str(e)}, 等待 10 秒后重试')
            time.sleep(10)
            withTimestamp = True

if __name__ == '__main__':
    if not from_cache:
        print(f'正在获取歌单 {playlist_id} 列表')
        playlist = get(f'/playlist/detail?id={playlist_id}')
        with open('playlist.json', 'w', encoding='utf-8') as f:
            f.write(json.dumps(playlist, ensure_ascii=False, indent=4))

        print(f'正在获取歌单 "{playlist["playlist"]["name"]}" 歌曲详情')
        songs = []
        with open('old_order.csv', 'w', encoding='utf-8') as f:
            f.write('id,name,artist,album,uploadTime,songPublishTime,albumPublishTime,publishTime,publishTimeStr\n')
            for track in tqdm(playlist['playlist']['tracks']):
                song = []
                song.append(track['id'])
                song.append(track['name'])
                song.append("/".join([ar['name'] for ar in track['ar']]))
                song.append(track['al']['name'])
                song.append(track['publishTime'])
                songDetail = get(f'/ugc/song/get?id={track["id"]}')
                songPublishTime = songDetail['data']['publishTime']
                song.append(songPublishTime)
                albumDetail = get(f'/album?id={track["al"]["id"]}')
                albumPublishTime = albumDetail['album']['publishTime']
                song.append(albumPublishTime)
                publicTime = songPublishTime if songPublishTime > 0 else albumPublishTime
                song.append(publicTime)
                timeStr = time.strftime("%Y/%m/%d", time.localtime(publicTime / 1000))
                song.append(timeStr)
                songs.append(song)
                f.write(','.join([str(item) for item in song]) + '\n')
    else:
        print('加载上次的歌单歌曲顺序')
        songs = []
        with open('old_order.csv', 'r', encoding='utf-8') as f:
            f.readline()
            for line in f:
                song = line.strip().split(',')
                songs.append(song)

    print(f'正在对歌单按歌曲发布时间进行排序')
    songs.sort(key=lambda song: int(song[-2]), reverse=True)
    with open('new_order.csv', 'w', encoding='utf-8') as f:
        f.write('id,name,artist,album,uploadTime,songPublishTime,albumPublishTime,publishTime,publishTimeStr\n')
        for song in songs:
            f.write(','.join([str(item) for item in song]) + '\n')
    ids = [str(song[0]) for song in songs]
    result = get(f'/song/order/update?pid={playlist_id}&ids=[{",".join(ids)}]')
    print('歌单已经按发布时间排序 ' + str(result))
