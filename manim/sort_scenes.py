# coding=UTF-8

from manimlib.imports import *
import numpy as np

numbers = [21, 99, 49, 11, 66, 5, 78, 86]

class Sort(Scene):
    def construct(self):
        # 显示文字
        text1 = Text("归并排序\n\n采用分治法\n先二分成无数个子序列\n再对每个子序列排序\n最后合并为有序序列", color=WHITE, font="黑体")
        text1.scale(1.5)
        text1.move_to(np.array([0.0, 0.0, 0.0]))
        self.play(ShowCreation(text1))
        self.wait(2)
        self.play(Uncreate(text1))
        # 1级
        group1 = VGroup()
        for i in range(8):
            group1.add(Square(side_length=1))
            if i > 0: group1[i].next_to(group1[i-1], RIGHT, 0)
        group1.move_to(np.array([0.0, 3.0, 0.0]))
        self.play(FadeIn(group1))
        # 数字
        elements = []
        for i in range(len(numbers)):
            elements.append(Integer(numbers[i]))
            elements[i].move_to(np.array([-3.5 + i * 1.0, 3.0, 0.0]))
            self.play(ShowCreation(elements[i]))
        # 2级
        arrow1to2_1 = Arrow(start=np.array([-0.5, 2.5, 0.0]), end=np.array([-3.0, 1.5, 0.0]))
        arrow1to2_2 = Arrow(start=np.array([0.5, 2.5, 0.0]), end=np.array([3.0, 1.5, 0.0]))
        self.play(ShowCreation(arrow1to2_1))
        self.play(ShowCreation(arrow1to2_2))
        group2_1 = VGroup()
        for i in range(4):
            group2_1.add(Square(side_length=1))
            if i > 0: group2_1[i].next_to(group2_1[i-1], RIGHT, 0)
        group2_1.move_to(np.array([-2.0, 3.0, 0.0]))
        self.add(group2_1)
        self.play(ApplyMethod(group2_1.move_to, np.array([-2.5, 1.0, 0.0])))
        group2_2 = VGroup()
        for i in range(4):
            group2_2.add(Square(side_length=1))
            if i > 0: group2_2[i].next_to(group2_2[i-1], RIGHT, 0)
        group2_2.move_to(np.array([2.0, 3.0, 0.0]))
        self.add(group2_2)
        self.play(ApplyMethod(group2_2.move_to, np.array([2.5, 1.0, 0.0])))
        for i in range(0, 4):
            self.play(ApplyMethod(elements[i].move_to, np.array([-4.0 + i * 1.0, 1.0, 0.0])))
        for i in range(4, 8):
            self.play(ApplyMethod(elements[i].move_to, np.array([1.0 + (i - 4) * 1.0, 1.0, 0.0])))
        # 3级
        arrow2to3_1 = Arrow(start=np.array([-3.0, 0.5, 0.0]), end=np.array([-4.5, -0.5, 0.0]))
        arrow2to3_2 = Arrow(start=np.array([-3.0, 0.5, 0.0]), end=np.array([-1.5, -0.5, 0.0]))
        arrow2to3_3 = Arrow(start=np.array([3.0, 0.5, 0.0]), end=np.array([1.5, -0.5, 0.0]))
        arrow2to3_4 = Arrow(start=np.array([3.0, 0.5, 0.0]), end=np.array([4.5, -0.5, 0.0]))
        self.play(ShowCreation(arrow2to3_1))
        self.play(ShowCreation(arrow2to3_2))
        self.play(ShowCreation(arrow2to3_3))
        self.play(ShowCreation(arrow2to3_4))
        group3 = []
        for i in range(4):
            group = VGroup()
            group.add(Square(side_length=1))
            group.add(Square(side_length=1))
            group[1].next_to(group[0], RIGHT, 0)
            if i <= 1:
                group.move_to(np.array([-3.5 + i * 2.0, 1.0, 0.0]))
            else:
                group.move_to(np.array([1.5 + (i - 2) * 2.0, 1.0, 0.0]))
            group3.append(group)
            self.add(group)
        self.play(ApplyMethod(group3[0].move_to, np.array([-5.0, -1.0, 0.0])))
        self.play(ApplyMethod(group3[1].move_to, np.array([-2.0, -1.0, 0.0])))
        self.play(ApplyMethod(group3[2].move_to, np.array([2.0, -1.0, 0.0])))
        self.play(ApplyMethod(group3[3].move_to, np.array([5.0, -1.0, 0.0])))
        self.play(ApplyMethod(elements[0].move_to, np.array([-5.5, -1.0, 0.0])))
        self.play(ApplyMethod(elements[1].move_to, np.array([-4.5, -1.0, 0.0])))
        self.play(ApplyMethod(elements[2].move_to, np.array([-2.5, -1.0, 0.0])))
        self.play(ApplyMethod(elements[3].move_to, np.array([-1.5, -1.0, 0.0])))
        self.play(ApplyMethod(elements[4].move_to, np.array([1.5, -1.0, 0.0])))
        self.play(ApplyMethod(elements[5].move_to, np.array([2.5, -1.0, 0.0])))
        self.play(ApplyMethod(elements[6].move_to, np.array([4.5, -1.0, 0.0])))
        self.play(ApplyMethod(elements[7].move_to, np.array([5.5, -1.0, 0.0])))
        # 排序
        self.play(ApplyMethod(elements[0].shift, DOWN))
        self.play(ApplyMethod(elements[1].shift, DOWN))
        self.play(ApplyMethod(elements[0].move_to, np.array([-5.5, -1.0, 0.0])))
        self.play(ApplyMethod(elements[1].move_to, np.array([-4.5, -1.0, 0.0])))
        self.play(ApplyMethod(elements[2].shift, DOWN))
        self.play(ApplyMethod(elements[3].shift, DOWN))
        self.play(ApplyMethod(elements[3].move_to, np.array([-2.5, -1.0, 0.0])))
        self.play(ApplyMethod(elements[2].move_to, np.array([-1.5, -1.0, 0.0])))
        self.play(ApplyMethod(elements[4].shift, DOWN))
        self.play(ApplyMethod(elements[5].shift, DOWN))
        self.play(ApplyMethod(elements[5].move_to, np.array([1.5, -1.0, 0.0])))
        self.play(ApplyMethod(elements[4].move_to, np.array([2.5, -1.0, 0.0])))
        self.play(ApplyMethod(elements[6].shift, DOWN))
        self.play(ApplyMethod(elements[7].shift, DOWN))
        self.play(ApplyMethod(elements[6].move_to, np.array([4.5, -1.0, 0.0])))
        self.play(ApplyMethod(elements[7].move_to, np.array([5.5, -1.0, 0.0])))
        # 再回去
        self.play(Uncreate(arrow2to3_1))
        self.play(Uncreate(arrow2to3_2))
        self.play(ApplyMethod(elements[3].move_to, np.array([-4.0, 1.0, 0.0])))
        self.play(ApplyMethod(elements[0].move_to, np.array([-3.0, 1.0, 0.0])))
        self.play(ApplyMethod(elements[2].move_to, np.array([-2.0, 1.0, 0.0])))
        self.play(ApplyMethod(elements[1].move_to, np.array([-1.0, 1.0, 0.0])))
        self.play(Uncreate(arrow2to3_3))
        self.play(Uncreate(arrow2to3_4))
        self.play(ApplyMethod(elements[5].move_to, np.array([1.0, 1.0, 0.0])))
        self.play(ApplyMethod(elements[4].move_to, np.array([2.0, 1.0, 0.0])))
        self.play(ApplyMethod(elements[6].move_to, np.array([3.0, 1.0, 0.0])))
        self.play(ApplyMethod(elements[7].move_to, np.array([4.0, 1.0, 0.0])))
        for group in group3:
            self.play(FadeOut(group))
        # 彻底回去了
        self.play(Uncreate(arrow1to2_1))
        self.play(Uncreate(arrow1to2_2))
        # oldelements = [elements[3], elements[0], elements[2], elements[1], elements[5], elements[4], elements[7], elements[6]]
        newelements = [elements[5], elements[3], elements[0], elements[2], elements[4], elements[6], elements[7], elements[1]]
        for i in range(len(newelements)):
            self.play(ApplyMethod(newelements[i].move_to, np.array([-3.5 + i * 1.0, 3.0, 0.0])))
        self.play(FadeOut(group2_1))
        self.play(FadeOut(group2_2))
        # 销毁
        self.wait(2)
        for element in newelements:
            self.play(Uncreate(element))
        self.play(FadeOut(group1))
        # 结尾
        text2 = Text("感谢观看\n\n软2016-612制作\n使用manim动画引擎", color=WHITE, font="黑体")
        text2.scale(1.5)
        text2.move_to(np.array([0.0, 0.5, 0.0]))
        self.play(ShowCreation(text2))
        self.wait(2)
        self.play(FadeOut(text2))
        return
