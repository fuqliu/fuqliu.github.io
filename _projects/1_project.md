---
layout: page
title: Attack LLMs in TS
description: To expose the vulnerabilities of LLMs in time series forecasting by three distinct black-box adversarial attacks.
img: assets/img/risk_AI.jpg
importance: 1
category: Trustworthy LLM4TS
---

---
This project aims to fully understand the vulnerabilities of LLMs in time series forecasting, which is composed of the following papers:

 - [Adversarial Vulnerabilities in Large Language Models for Time Series Forecasting](https://fuqliu.github.io/attack-llm4ts/) *AISTATS 2025*.
 - [Temporally Sparse Attack for Fooling Large Language Models in Time Series Forecasting](https://openreview.net/pdf?id=oL806RzbDi) *Building Trust in Language Models and Applications Workshop at ICLR 2025*.

---

### 1. Black-box attack against LLMs in time series forecasting.

More detailed project page: [link](https://fuqliu.github.io/attack-llm4ts/)

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

#### **Threat Model**

<div class="content has-text-justified">
  <p>
    The threat model defines the assumptions, capabilities, and objectives of the attacker attempting to manipulate LLM-based forecasting models.
  </p>
  <p>
    We begin with a brief introduction to time series forecasting. Let \( \mathbf{X}_t \in \mathbb{R}^d \) denote  \( d \)-dimensional time series at time \(t\). Given a sequence of recent \(T\) historical observations \( \mathbf{X}_{t-T+1:t} \), a forecasting model, \( f(\cdot) \), is employed to predict the future values for the subsequent \( \tau \) time steps. Assuming \( \hat{\mathbf{Y}}_{t+1:t+\tau} \) denotes the predicted future values and \( \mathbf{Y}_{t+1:t+\tau} \) represents the corresponding ground truth values, the prediction is formulated as:
    \[
      \hat{\mathbf{Y}}_{t+1:t+\tau} = f\left(\mathbf{X}_{t-T+1:t}\right),    
      \tag{1-1}
    \]
    where \( f(\cdot) \) is a function parameterized by a large language model.
  </p>
  <p>
    The attacker's objective is to deceive an LLM-based time series forecasting model into producing anomalous outputs that deviate significantly from both its normal predictions and the corresponding ground truth, through the introduction of imperceptible perturbations. This adversarial attack problem can be framed as an optimization task as follows:
    \[
      \begin{split}
        \max_{\rho_{t-T+1:t}}~& \mathcal{L}\left(f\left(\mathbf{X}_{t-T+1:t}+\boldsymbol{\rho}_{t-T+1:t} \right), \mathbf{Y}_{t+1:t+\tau}\right)\\
        \text{s.t.}~&\ \left\|\rho_i \right\|_p \le\epsilon, i\in\left[t-T+1,t\right],
      \end{split}
      \tag{1-2}
    \]
    where \( \mathbf{X}_{t-T+1:t} \) denotes the clean input, \( \mathbf{Y}_{t+1:t+\tau} \) denotes the true future values, and \( \boldsymbol{\rho}_{t-T+1:t} \) denotes the adversarial perturbations. The loss function \( \mathcal{L} \) quantifies the discrepancy between the model's output and the ground truth, while \( \epsilon \) constrains the magnitude of the perturbations under the \( \ell_p \)-norm, ensuring that the adversarial attack remains imperceptible.
  </p>
  <p>
    In practical applications, accessing the full set of detailed parameters of an LLM is typically infeasible, compelling the attacker to treat the target model as a black-box system. Moreover, the ground truth is unavailable during the runtime of forecasting. Additionally, obtaining the complete training dataset is impractical, leaving the attacker without access to this information. The attacker’s capabilities can therefore be summarized as follows:
  </p>
  <ul>
    <li><strong>no access to the training data</strong></li>
    <li><strong>no access to internal information of the LLM-based forecasting model</strong></li>
    <li><strong>no access to ground truth</strong></li>
    <li><strong>the ability to query the target model</strong></li>
  </ul>
</div>

#### **Methodology**

<div class="content has-text-justified">
  <p>
    As discussed above, the true future values, \( \mathbf{Y}_{t+1:t+\tau} \), in Equation (1-2) are typically inaccessible during the runtime of time series forecasting. A possible solution is to replace them with the predicted values, \( \hat{\mathbf{Y}}_{t+1:t+\tau} \), generated by the forecasting model. Consequently, Equation (2) is reformulated as
    \[
      \begin{split}
        \max_{\boldsymbol{\rho}_{t-T+1:t}}~& \mathcal{L}\left(f\left(\mathbf{X}_{t-T+1:t}+\boldsymbol{\rho}_{t-T+1:t} \right), \hat{\mathbf{Y}}_{t+1:t+\tau}\right)\\
        \text{s.t.}~&\ \left\|\rho_i \right\|_p \le\epsilon, i\in\left[t-T+1,t\right].   
      \end{split}
      \tag{1-3}
    \]
    Considering the black-box setting (the parameters of the forecasting model is unavailable), the attacker can employ simultaneous perturbation stochastic approximation (SPSA) to estimate gradients, which can be expressed as
    \[
      \boldsymbol{g}_{t-T+1:t}=\frac{ f\left(\mathbf{X}_{t-T+1:t}+\boldsymbol{\theta}_{t-T+1:t} \right)-f\left(\mathbf{X}_{t-T+1:t}-\boldsymbol{\theta}_{t-T+1:t} \right)}{2*\boldsymbol{\theta}_{t-T+1:t}},     
      \tag{1-4}
    \]
    where \(\boldsymbol{\theta}_{t-T+1:t} \) denotes a random signal. Then the perturbations can be computed from the estimated gradients like classical FSGM.
  </p>
  <p>
    Perturbations computed by this method are designed to generate perturbations that deviate significantly from the original predictions. However, this mechanism has been shown to be less effective in the time series forecasting domain, where targeted attacks have proven more effective. Nevertheless, existing targeted attacks for time series forecasting are all white-box approaches and focus on lightweight models, leaving a gap in understanding the vulnerability of large language model (LLM)-based time series forecasters. Practical scenarios necessitate a black-box version of targeted attacks to account for the fact that accessing internal information (e.g., parameters, structures) of LLMs is often infeasible.
  </p>
  <p>
    We first adjust our objective to focus on misleading the forecasting model into producing outputs that closely resemble an anomalous sequence, rather than simply deviating from its normal predictions. Accordingly, the optimization problem in Eq.<a href="#equ:foreattack_2">(2)</a> is reformulated as
    \[
      \begin{split}
        \min_{\boldsymbol{\rho}_{t-T+1:t}}~& \mathcal{L}\left(f\left(\mathbf{X}_{t-T+1:t}+\boldsymbol{\rho}_{t-T+1:t} \right), \mathcal{Y}\right)\\
        \text{s.t.}~&\ \left\|\rho_i \right\|_p \le\epsilon, i\in\left[t-T+1,t\right],
      \end{split}
      \tag{1-5}
    \]
    where \( \mathcal{Y} \) represents the targeted anomalous time series and Gaussian White Noise (GWN) is empirically utilized. This modification enables the attacker to generate perturbations without relying on the ground truth. Furthermore, targeted attacks are often more effective than untargeted attacks against time seires forecasting, as they provide a specific direction for optimization.
  </p>
  <p>
    To address the black-box setting, we introduce a gradient-free optimization approach, termed <u>D</u>irectional <u>G</u>radient <u>A</u>pproximation (DGA). This method is specifically designed to estimate the gradients of LLM-based forecasting models through targeted queries to the model.
  </p>
  <p>
    Supposing \( \boldsymbol{\theta}_{t-T+1:t} \) denote a random small signal, the gradient, \( \boldsymbol{g}_{t-T+1:t} \), which approximates the direction from the normal output to the targeted anomalous output, can be expressed as
    \[
      \boldsymbol{g}_{t-T+1:t}=\frac{\mathcal{L}\left(\mathcal{Y}-f\left(\mathbf{X}_{t-T+1:t}+\boldsymbol{\theta}_{t-T+1:t} \right)\right)-\mathcal{L}\left(\mathcal{Y}-f\left(\mathbf{X}_{t-T+1:t}\right)\right)}{\boldsymbol{\theta}_{t-T+1:t}}.     
      \tag{1-6}
    \]
    Supposing \( \ell_1 \)-norm is applied in Eq.<a href="#equ:foreattack_3">(3)</a>, the magnitude of the perturbation is strictly constrained to be imperceptible. The perturbation, \( \boldsymbol{\rho}_{t-T+1:t} \), can be computed from the approximated gradient, and the temporary adversarial example, \( \mathbf{X'}_{t-T+1:t} \), is generated as
    \[
      \mathbf{X'}_{t-T+1:t} = \mathbf{X}_{t-T+1:t}+\boldsymbol{\rho}_{t-T+1:t} =\mathbf{X}_{t-T+1:t}+\epsilon \cdot \text{sign}\left(\boldsymbol{g}_{t-T+1:t}\right),
      \tag{1-7}
    \]
    where \( \text{sign}\left(\cdot\right) \) denotes the signum function.
  </p>
  <p>
    The novel targeted gradient-free attack, termed <u>D</u>irectional <u>G</u>radient <u>A</u>pproximation (DGA), is proposed to evaluate the robustness of LLM-based forecasting models.
  </p>
  
</div>

#### **Implementation**

<div class="content has-text-justified">
  <p>
    The DGA method is implemented as follows:
  </p>
    <pre><code>
    def DGA(df, test, nixtla_client, scale, time_col, target_col, h, freq, mean, std):
      l = len(df[target_col])
      u = (np.random.rand(l) - 0.5) * scale
      
      df_1 = df.copy()
      df_2 = df.copy()
      df_1[target_col] = (df_1[target_col] + u - mean)/std
      df_2[target_col] = (df_2[target_col] - mean)/std
      
      target = np.random.normal(0,1,h)
      
      timegpt_fcst_df_1 = nixtla_client.forecast(df=df_1, h=h, time_col=time_col, target_col=target_col, freq=freq, model='timegpt-1-long-horizon')
      pred_1 = timegpt_fcst_df_1['TimeGPT']
      timegpt_fcst_df_2 = nixtla_client.forecast(df=df_2, h=h, time_col=time_col, target_col=target_col, freq=freq, model='timegpt-1-long-horizon')
      pred_2 = timegpt_fcst_df_2['TimeGPT']
      
      dis_1 = pd.Series(pred_1.values - target)
      dis_2 = pd.Series(pred_2.values - target)
      
      gradient = (dis_1.abs().sum()-dis_2.abs().sum()) / u
      
      noise = df.copy()
      noise[target_col] = noise[target_col] + scale * np.sign(gradient)
      
      return noise
    </code></pre>
</div>

#### **Experiments**

<div class="content has-text-justified">
  <p>
    As shown in Table 1, the experimental results demonstrate that the designed adversarial attack significantly degrades forecasting performance across all datasets. Compared to GWN of the same perturbation intensity, our attack had a much more detrimental effect on the models' predictions.
  </p>
</div>

<div class="row justify-content-center">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/attack_llm4ts/overall_table.jpg" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Table 1: Overall Comparison.
</div>

<div class="content has-text-justified">
  <p>
    Figure 2 demonstrates the robustness comparison between LLM-based forecasting models (LLMTime with GPT-4 and TimeGPT) and non-LLM models (iTransformer and TimeNet) under the proposed adversarial attack. The larger blue areas in the radar charts for the LLM-based models indicate that they experience significantly higher increases in errors, across all datasets (ETTh1, ETTh2, Exchange, Traffic, and Weather). In contrast, the non-LLM models, iTransformer and TimeNet, exhibit much smaller error increases, suggesting that they are more robust to adversarial attacks. This analysis highlights that LLM-based models are generally less resilient than non-LLM models, making them more vulnerable to adversarial manipulations in time series forecasting.
  </p>
</div>

<div class="content has-text-justified">
  <p>
    As illustrated in Figure 3, the attack caused a clear divergence between the forecasted values and the true time series. LLMTime with GPT-3.5 in particular, showed significant susceptibility, with their errors increasing substantially under adversarial conditions.
  </p>
</div>

<div class="content has-text-justified">
  <p>
    Figure 4 illustrates the distribution shift in predictions caused by targeted perturbations on the LLM-based forecasting model. The proposed DGA method is designed to mislead the forecasting model, causing its predictions to resemble a random walk. As depicted in Figure 4, the "blue" shaded area, representing the perturbed prediction distribution, deviates significantly from the original "yellow" distribution and approaches a normal distribution. This shift underscores how subtle, well-crafted perturbations can manipulate the model into producing inaccurate forecasts. The effect of DGA-induced perturbations is pronounced when examining the prediction distributions, where errors are much more severe compared to the minor disruptions caused by GWN. These findings suggest that LLM-based forecasting models are highly susceptible to adversarial attacks that exploit the model's inherent vulnerabilities.
  </p>
</div>