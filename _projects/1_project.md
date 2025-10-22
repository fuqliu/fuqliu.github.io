---
layout: page
title: Attack LLMs in TS
description: To expose the vulnerabilities of LLMs in time series forecasting by three distinct black-box adversarial attacks.
img: assets/img/Trustworthy_AI.jpg
importance: 1
category: Trustworthy LLM4TS
---

---
This project aims to fully understand the vulnerabilities of LLMs in time series forecasting and is composed of the following papers:

 - [Adversarial Vulnerabilities in Large Language Models for Time Series Forecasting](https://fuqliu.github.io/attack-llm4ts/) *AISTATS 2025*.
 - [Temporally Sparse Attack for Fooling Large Language Models in Time Series Forecasting](https://openreview.net/pdf?id=oL806RzbDi) *Building Trust in Language Models and Applications Workshop at ICLR 2025*.

---

### 1. Black-box attack against LLMs in time series forecasting.

<div class="row justify-content-center">
    <div class="col-sm-9 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Attack1.jpg" title="Attack LLMs" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    We manipulate LLM-based time series forecasting.
</div>

#### **Motivation**

<div class="content has-text-justified">
  <ul>
    <li>Time series forecasting plays a crucial role in informed decision-making across various domains;</li>
    <li>Large Language Model (LLM)-based forecasting models (e.g., <a href="https://arxiv.org/pdf/2310.03589" target="_blank"><u>TimeGPT</u></a>, <a href="https://arxiv.org/pdf/2310.07820" target="_blank"><u>LLMTime</u></a>, and <a href="https://arxiv.org/pdf/2310.01728" target="_blank"><u>Time-LLM</u></a>) have demonstrated promising performance in various time series forecasting applications; </li>
    <li><strong style="color: red;">Can the predictions of LLM-based time series forecasting models be trusted?</strong></li>
    <li>The vulnerabilities of LLM-based time series forecasting models remain poorly understood. Particularly, existing adversarial attacks cannot be directly applied to these models due to the following two challenges:</li>
    <ul>
      <li>The ground truth, representing the value at a future time step, is not available during the runtime of time series forecasting. Nonetheless, most existing adversarial attacks depend on the ground truth to compute gradients and generate perturbations;</li>
      <em style="color: green;">For example, consider a 5-minute-ahead stock value prediction. At 10:00 am, the ground truth corresponds to the stock value at 10:05 am, which is unavailable at 10:00 am for both forecasters and attackers. Typical attack methods, such as FGSM and PGD, rely on the ground truth to compute gradients and generate adversarial examples.</em>
      <li>LLMs must be treated as strict black-box systems due to the difficulty of accessing their internal workings and parameters.</li>
      <em style="color: green;">For example, consider attacking the commecial forecasting model, <a href="https://arxiv.org/pdf/2310.03589" target="_blank"><u>TimeGPT</u></a>. It is impossible for an attacker to access the model's parameters, making it infeasible to use these parameters to generate adversarial examples.</em>    
    </ul>
    <li>To address this gap, we propose a targeted gradient-free attack to evaluate the robustness of LLM-based forecasting models;</li>
    <li>The proposed attack can significantly degrade the performance of LLM-based forecasting models, as demonstrated across multiple models (e.g., <a href="https://arxiv.org/pdf/2310.03589" target="_blank"><u>TimeGPT</u></a>, <a href="https://arxiv.org/pdf/2310.07820" target="_blank"><u>LLMTime</u></a> with GPT-3.5, GPT-4, LLaMa, and Mistral, and <a href="https://arxiv.org/pdf/2310.01728" target="_blank"><u>Time-LLM</u></a>) and five real-world applications.</li>
  </ul>   
</div>