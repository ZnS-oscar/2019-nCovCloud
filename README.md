# 2019-nCovCloud
2019-nCovCloud平台
下图为此平台的主页：
![HomePage](https://user-images.githubusercontent.com/59348419/117463897-b7d91a80-af82-11eb-9a3c-833f8aad8885.png)

此平台大致分为两个功能模块：多尺度传播预测与基因变异分析。
下面展示这两个模块的子模块。

## 1. 多尺度传播预测
此部分展示了传染病传播预测，R0趋势分析和SIR&SIS模型展示。
	
### 1.1 传染病传播预测
如下图所示，可以查看近期新型冠状病毒肺炎感染者人数和预测人数。
![EpidemicPrediction](https://user-images.githubusercontent.com/59348419/117463805-a3951d80-af82-11eb-8fb6-8f42dfe9df55.png)
### 1.2 R0趋势分析
如下图所示，可以查看R0趋势分析曲线图。
![R0trendAnalysis](https://user-images.githubusercontent.com/59348419/117464183-fe2e7980-af82-11eb-9a48-5d669b91eda9.png)
### 1.3 SIR&SIS模型
SIR模型将人群分为三类：潜在感染者S，患者I，康复人群R。其中康复人群对疾病具有免疫力；SIS模型则认为康复人群仍然对疾病没有免疫力，可能二次感染。SIR模型代表的疾病有肝炎等，SIS代表的疾病有流感，以及新型冠状病毒肺炎（有反复感染的病例报道）。

本项目使用蓝色表示患者，浅灰色表示潜在感染者，深灰色表示康复人群，清晰地展示了SIR模型和SIS模型，并指出：SIR相对更加容易控制，而SIS在较低的感染率下就可大面积爆发，社会应做好与该疾病长期共存的准备。
![SIRModel](https://user-images.githubusercontent.com/59348419/117484356-8fa8e600-af99-11eb-8858-28ff8f458d58.gif)
![SISModel](https://user-images.githubusercontent.com/59348419/117484363-90417c80-af99-11eb-8e58-cfe32ee1f388.gif)


## 2. 基因变异分析
此部分分为参数分析，RNA二级结构预测，变异数据分析。
### 2.1 参数分析
本项目从方差，k-mer，LAUPs对基因变异情况进行了分析，详情见下图
![k-mer analysis](https://user-images.githubusercontent.com/59348419/117484642-f3cbaa00-af99-11eb-829b-ee11e96f5cc9.png)
![image](https://user-images.githubusercontent.com/59348419/117484702-080fa700-af9a-11eb-9142-7c11bad02b89.png)

### 2.2 RNA二级结构预测
本项目对RNA序列的二级结构进行了预测，该预测是基于最小自由能的。在结果页面之中还给出了 mountain plot。
![RNASecondaryStructurePrediction](https://user-images.githubusercontent.com/59348419/117464304-17cfc100-af83-11eb-83f3-9ede2fa271c8.gif)
### 2.3 变异数据分析
本页面给出了不同类型的点突变不同概率的位点个数的数据。该数据会持续更新。
![MutationAnalysis](https://user-images.githubusercontent.com/59348419/117484940-53c25080-af9a-11eb-8380-c9cd2a1947b4.gif)

