# ***Zusatzaufgabe 2***:

## Kinematische und kinetostatische Analyse

### Ermitteln Sie für den dargestellten Mechanismus die Geschwindigkeit $V_C$


<figure>
  <img src="Zusatzaufgabe2.jpg "img">
  <figcaption></figcaption>
</figure>



### Geg.: $b,\,\omega = const$



## _Lösung:_



* Diese Vektoren werden zur Berechnung von $V_C$ benötigt. Sie können aus dem Mechanismus abgelesen werden. 

<p></p>

$$r_{A_0A}  = \binom{b}{b} \quad r_{AB} =\binom{2b}{0} \,\,\,\,\,\, r_{B_0B} =\binom{0}{3b} \,\,\,\,\,\, r_{B_0D} =\binom{b}{4b} \,\,\,\,\,\, r_{DC} =\binom{3b}{-b}$$d

<p></p>

* Bevor wir die Geschwindigkeit im Punkt $C$ berechnen können, müssen wir die Winkelgeschwidingkeiten in den Glieden 2 und 3 bestimmen.

* Die Vektorgeschwindigkeit für den Punkt $A$ setzt sich aus der Winkelgeschwindigkeit im Punkt $A_0$ multipliziert mit dem gedrehten Vektor $\tilde{r}_{A_0A} = \binom {-b}{b}$. Durch die Drehung verläuft der neue Vektor orthogonal zum Alten. Dabei werden die X- und Y- Werte vertauscht und der neue X-Wert wird negiert.

<p></p>

$$V_A = \omega \, \tilde{r}_{A_0{A}}$$

<p></p>

* Analog dazu setzt sich die Vektorgeschwindigkeit in Punkt $B$ aus der Geschwindigkeit $V_A$ und der Winkelgeschwindigkeit $\omega_2$ multipliziert mit dem Vektor $\tilde{r}_{AB}$

<p></p>

$$(I)\,\, V_B = V_A + \omega_2 \, \tilde{r}_{AB}$$

<p></p>

* Nun setzen wir $V_A$ mit $\omega \, \tilde{r}_{A_0{A}}$  in $V_B$ ein. 

<p></p>

$$(I)\,\, \bold V_B = \omega \, \tilde{r}_{A_0{A}}  + \omega_2 \, \tilde{\bold r}_{AB}$$

<p></p>

* $V_B$ können wir mit einer anderen Gleichung ausdrücken, nähmlich von Punkt $B_0$ aus mit der Tilde des Richtungsverktors $\tilde{r}_{B_0B} = \dbinom {-3b}{\,\,\,\,0}$

<p></p>

$$(II)\,\, V_B = \omega_3  \, \tilde{r}_{B_0B}$$

<p></p>

* Dadurch ergibt sich eine Gleichung nach Euler $(II)=(I)$:

<p></p>

 $$\omega_3  \, \tilde{r}_{B_0B} = \omega \, \tilde{r}_{A_0{A}}  + \omega_2  \,\tilde{r}_{AB}$$

<p></p>

* Aus dieser Gleichung berechnen wir $\omega_2$ und $\omega_3$. Für $\omega_2$ multiplizieren wir diese mit dem Vektor ${r}_{B_0B}$, wodurch die Unbekannte $\omega_3$ wegfällt:

<p></p>

$$0 = \omega \, \tilde{r}_{A_0{A}} \, {r}_{B_0B}  + \omega_2 \, \tilde{r}_{AB} \, {r}_{B_0B}$$

<p></p>

* Umgestellt nach $\omega_2$:

<p></p>

$$\omega_2 = - \, \omega \, \frac {\tilde{r}_{A_0A} \, {r}_{B_0B}}{\tilde{r}_{AB} \, {r}_{B_0B}}$$

<p></p>

$$\omega_2 = - \, \omega \, \frac {\dbinom {-b}{b} \dbinom{0}{3b}} {\dbinom {0}{2b} \dbinom{0}{3b}} = -\,  \dfrac {1}2 \, \omega$$

<p></p>

* Für die Berechnung von $\omega_3$ multiplizieren wir die Euler-Gleichung mit dem Richtungsvektor ${r}_{AB}$ und stellen diese nach $\omega_3$ um:

<p></p>

$$\omega_3 \, \tilde{r}_{B_0B} \, {r}_{AB} = \omega \, \tilde{r}_{A_0{A}} \, {r}_{AB}  + 0$$

<p></p>

$$\omega_3 = \omega \, \frac {\tilde{r}_{A_0A} \, {r}_{AB}}{\tilde{r}_{B_0B} \, {r}_{AB}}$$

<p></p>

$$\omega_3 = \omega \, \dfrac {\dbinom {-b}{\,\,\,\,b} \dbinom{2b}{\,\,0}} {\dbinom {-3b}{\,\,\,\,0} \dbinom{2b}{0}} = \,  \dfrac {1}3 \, \omega$$

<p></p>

* Jetzt wo wir die Winkelgeschwindigkeit in drittem Glied wissen, werden wir die Euler-Gleichung von diesem aus, aufstellen:

<p></p>

$$\omega_3  \, \tilde{r}_{B_0D} + \omega_4  \, \tilde{r}_{DC} = V_C \, e_x$$

<p></p>

* Wie wir aus der Zeichnung erkennen können, bewegt sich der Punkt $V_C$ nur horizontal. Um die Unbekannte $\omega_4$ zu eleminieren, multiplizieren wir die Gleichung mit den Vektor ${r}_{DC}$ :

<p></p>

$$\omega_3  \, \tilde{r}_{B_0D} \, {r}_{DC} = V_C \, e_x \, {r}_{DC}$$

<p></p>

* Und stellen diese nach $V_C$ um:

<p></p>

$$V_C = \omega_3 \, \dfrac {\tilde{r}_{B_0D} \, {r}_{DC}}{e_x \, {r}_{DC}} =  \frac 13 \, \omega \, \frac {\dbinom {-4b}{\,\,\,\,b} \dbinom{\,3b}{-b}} {\dbinom {1}{0} \dbinom{\,3b}{-b}} =  - \frac {13}9 \, \omega \, b$$



