---
layout: page
title: More Accurate
description: Two model-agnostic solutions to improve deep learning–based traffic forecasting.
img:
importance: 3
category: Resilient ITS
---

---
This project explores model-agnostic approaches for enhancing the performance of deep learning–based traffic forecasting, which is composed of two publications:

 - [Error adjustment based on spatiotemporal correlation fusion for traffic forecasting](https://www.sciencedirect.com/science/article/pii/S1566253525007079?ref=pdf_download&fr=RR-2&rr=97c1e150dae4a266) *Information Fusion*.
 - [A universal framework of spatiotemporal bias block for long-term traffic forecasting](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9737430) *IEEE Transactions on Intelligent Transportation Systems*.

---

### Autocorrelated Error Ajustment for Traffic Forecasting

#### Research Gap
Mean squared error (MSE) estimation is misused in the training process of deep learning-based traffic forecasting. Specifically,

 - Most existing studies treat forecasting tasks as regression problems and adopt standard regression training frameworks to optimize forecasting models.
 - Suppose each training example is denoted by a pair $\langle x, y \rangle$, where $x$ represents the input features and $y$ the corresponding target. The goal of regression is to learn a function $f$ that models the conditional distribution $p(y \mid x)$. A widely used approach is \textit{maximum likelihood estimation (MLE)}, which seeks to maximize the likelihood of the observed data under the model distribution. The general form of the MLE loss function is:

    \begin{equation}
    \mathcal{L}_{\text{MLE}} = -\sum_{i=1}^n \log p(y_i \mid x_i; f) = \frac{1}{2\sigma^2} \sum_{i=1}^n \left( y_i - f(x_i) \right)^2 + \frac{n}{2} \log (2\pi \sigma^2),
    \end{equation}
