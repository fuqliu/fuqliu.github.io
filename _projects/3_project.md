---
layout: page
title: More Robust ITS
description: Adversarial attack and defense against deep learning–based traffic forecasting.
img: assets/img/ITS.jpg
importance: 3
category: Resilient ITS
---

---
This project explores adversarial vulnerabilities of deep learning–based traffic forecasting, and the effective mitigation strategies. This project is composed of the following publications:

 - [Adversarial Danger Identification on Temporally Dynamic Graphs](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9737430) *IEEE Transactions on Neural Networks and Learning Systems*.

---
### 1. Adversarial Danger Identification for Traffic Forecasting

#### **Research gap**

 - However, Deep Neural Networks (DNNs) have been widely proven to be vulnerable to carefully crafted perturbations. For instance, recent studies have rigorously demonstrated that state-of-the-art GNN-based traffic forecasting models can be easily misled by small manipulations, resulting in the breakdown of the traffic system. 
 
 - The shown vulnerabilities of state-of-the-art forecasting models cast into question the usability and reliability of DNNs in real-world applications. It is thus imperative to develop effective methods to protect these models. 

 - Though researchers have proposed two types of adversarial defense strategies---re-training and filtering---to protect DNNs in various static applications, these methods are not applicable to time series applications. 
 
  - First, re-training-based strategies typically modify the internal components or structures of DNNs. For instance, adversarial training, a typical re-training-based method, adds adversarial perturbations or random noises to the training dataset to enhance DNNs' robustness. However, re-trained models are still vulnerable to advanced adversarial attacks or new datasets. Furthermore, state-of-the-art forecasting models' parameters and training settings are carefully designed, making it difficult to restore their original performance if these models are re-trained. Thus, re-training is not a viable option for protecting GNN-based forecasting models in forecasting domains.

  - Second, filtering-based defense strategies are designed to cleanse the poisoned input by removing local features while preserving the object's global structure. Static DNN-based classification models can work effectively with low-dimension features; yet filtered inputs could significantly compromise the model's forecasting performance.
  

#### **Solution**

---