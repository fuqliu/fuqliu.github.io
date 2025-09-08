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

#### Research gap
Mean squared error (MSE) estimation is frequently misapplied during the training of deep learning–based numerical forecasting models. Specifically,

 - Most existing studies treat forecasting tasks as regression problems and adopt standard regression training frameworks to optimize forecasting models.
 - Suppose each training example is denoted by a pair $\langle x, y \rangle$, where $x$ represents the input features and $y$ the corresponding target. The goal of regression is to learn a function $f$ that models the conditional distribution $p(y \mid x)$. A widely used approach is *maximum likelihood estimation (MLE)*, which seeks to maximize the likelihood of the observed data under the model distribution. The general form of the MLE loss function is:
    $$ 
    \mathcal{L}_{\text{MLE}} = -\sum_{i=1}^n \log p(y_i \mid x_i; f) 
    = \frac{1}{2\sigma^2} \sum_{i=1}^n \left( y_i - f(x_i) \right)^2 
    + \frac{n}{2} \log(2\pi\sigma^2),
    $$
 which assumes the output follows a Gaussian distribution with variance $\sigma^2$.
 - When the errors are assumed to be independent and identically distributed (i.i.d.), the variance term $\sigma^2$ becomes constant. In this case, maximizing the likelihood is equivalent to minimizing the *mean squared error (MSE)*, which simplifies the training objective:

 $$
 \mathcal{L}_{\text{MLE}} \propto \sum_{i=1}^n \left( y_i - f(x_i) \right)^2 = \| y - f(x) \|_2^2.
 $$
 MSE is simple, computationally efficient, and widely used in practice. In standard regression tasks, where training samples are typically assumed to be randomly drawn from a distribution, the i.i.d. assumption holds reasonably well.

 - Existing time series forecasting studies adopt this same regression-based training paradigm, implicitly relying on the i.i.d. error assumption. However, [Sun, et al.](https://openreview.net/pdf?id=tJ_CO8orSI) was among the first to question this assumption in univariate forecasting, showing that autocorrelated errors in the temporal dimension can negatively affect forecasting performance. Our work builds upon this insight and extends the discussion to the multivariate case, where spatial and temporal correlations in errors are even more prominent. 
 #### Model the forecasting errors as Vector Autoregressive (VAR) rather than i.i.d.
