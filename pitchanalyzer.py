import numpy as np
import matplotlib.pyplot as plt
import parselmouth # pip install praat-parselmouth

def draw_spectrogram(spectrogram, dynamic_range=70):
    X, Y = spectrogram.x_grid(), spectrogram.y_grid()
    sg_db = 10 * np.log10(spectrogram.values)
    plt.pcolormesh(X, Y, sg_db, vmin=sg_db.max() - dynamic_range, cmap='afmhot')
    plt.ylim([spectrogram.ymin, spectrogram.ymax])
    plt.ylabel("frequency [Hz]")

def draw_intensity(intensity):
    plt.plot(intensity.xs(), intensity.values.T, linewidth=1)
    plt.grid(False)
    plt.ylim(0)
    plt.ylabel("intensity [dB]")

def draw_pitch(pitch):
    # Extract selected pitch contour, and replace unvoiced samples by NaN to not plot
    pitch_values = pitch.selected_array['frequency']
    pitch_values[pitch_values==0] = np.nan
    plt.plot(pitch.xs(), pitch_values, 'o', markersize=2, color='#1f77b4')
    plt.grid(False)
    plt.ylim(80, pitch.ceiling)
    plt.ylabel("fundamental frequency [Hz]")

class Tonality:
    """
    原作者: 码农高天(https://space.bilibili.com/245645656)
    """
    base_diff = [0, 2, 4, 5, 7, 9, 11]
    tones = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']
    
    def __init__(self, tone):
        assert tone in self.tones
        self.base_freq = self.tone_to_freq(tone)

    def tone_to_freq(self, tone):
        A_freq = 440
        return A_freq * (2 ** (self.tones.index(tone)/ 12))

    def get_freq(self):
        ret = []
        for r in range(-3, 2):
            base = self.base_freq * (2 ** r)
            ret.extend([base * (2 ** (diff / 12)) for diff in self.base_diff])
        return ret

def draw_standard(tone):
    for f in Tonality(tone).get_freq():
        plt.axline((0, f), (1, f), lw=1.5)

snd = parselmouth.Sound("./input/vocal.wav") # 改这里
# spectrogram = snd.to_spectrogram()
# intensity = snd.to_intensity()
pitch = snd.to_pitch()
plt.figure(figsize=(snd.tmax, 8.0))
plt.plot(snd.xs(), snd.values.T)
plt.xlim([snd.xmin, snd.xmax])
plt.xlabel("time [s]")
draw_standard('F') # 还有这里
draw_pitch(pitch)
plt.savefig('./output/pitch.png', bbox_inches='tight') # 输出或者在窗口中显示
#plt.show()
