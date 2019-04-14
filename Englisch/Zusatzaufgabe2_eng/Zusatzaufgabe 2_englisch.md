# ***Additional task 2***:

## Kinematic and kinetostatic analysis
<!-- Kinematische und kinetostatische Analyse -->

### Determine the velocity $V_C$ for the shown mechanism 
<!-- Ermitteln Sie für den dargestellten Mechanismus die Geschwindigkeit $V_C$ -->


<figure>
  <img src="Zusatzaufgabe 2.jpg "img">
  <figcaption></figcaption>
</figure>



### Given: $b,\,\omega = const$



## _Solution:_



* These vectors are needed to calculate $V_C$. They can be read from the mechanism.
 <!-- Diese Vektoren werden zur Berechnung von $V_C$ benötigt. Sie können aus dem Mechanismus abgelesen werden.  -->

<p></p>

$$r_{A_0A}  = \binom{b}{b} \,\,\,\,\,\, r_{AB} =\binom{2b}{0} \,\,\,\,\,\, r_{B_0B} =\binom{0}{3b} \,\,\,\,\,\, r_{B_0D} =\binom{b}{4b} \,\,\,\,\,\, r_{DC} =\binom{3b}{-b}$$

<p></p>

* Before we can calculate the velocity at the point $C$, we must determine the angular velocities in the links 2 and 3.
<!-- Bevor wir die Geschwindigkeit im Punkt $C$ berechnen können, müssen wir die Winkelgeschwidingkeiten in den Glieden 2 und 3 bestimmen. -->

* The vector velocity for point $A$ is the angular velocity at point $A_0$ multiplied by the rotated vector $\tilde{r}_{A_0A} = \binom {-b}{b}$. The rotation causes the new vector to be orthogonal to the old one. The X and Y values ​​are swapped and the new X value is negated.
 <!-- Die Vektorgeschwindigkeit für den Punkt $A$ setzt sich aus der Winkelgeschwindigkeit im Punkt $A_0$ multipliziert mit dem gedrehten Vektor $\tilde{r}_{A_0A} = \binom {-b}{b}$. Durch die Drehung verläuft der neue Vektor Orthogonal zum Alten. Dabei werden die X- und Y- Werte vertauscht und der neue X-Wert wird negiert. -->

<p></p>

$$V_A = \omega \, \tilde{r}_{A_0{A}}$$

<p></p>

* Analogously, the vector velocity in point $B$ is made up of the velocity $V_A$ and the angular velocity $\omega_2$ multiplied by the vector $\tilde{r}_{AB}$.
<!-- Analog dazu setzt sich die Vektorgeschwindigkeit in Punkt $B$ aus der Geschwindigkeit $V_A$ und der Winkelgeschwindigkeit $\omega_2$ multipliziert mit dem Vektor $\tilde{r}_{AB}$ -->

<p></p>

$$(I)\,\, V_B = V_A + \omega_2 \, \tilde{r}_{AB}$$

<p></p>

* Now we replace $V_A$ with $\omega \, \tilde{r}_{A_0{A}}$ in $V_B$.
 <!-- Nun ersetzen wir $V_A$ mit $\omega \, \tilde{r}_{A_0{A}}$  in $V_B$ ein.  -->

<p></p>

$$(I)\,\, \bold V_B = \omega \, \tilde{r}_{A_0{A}}  + \omega_2 \, \tilde{\bold r}_{AB}$$

<p></p>

* We can print $V_B$ with another equation, namely from point $B_0$ with the erased directional vector $\tilde{r}_{B_0B} = \dbinom {-3b}{\,\,\,\,0}$.
 <!-- $V_B$ können wir mit einer anderen Gleichung ausdrucken, näHmlich von Punkt $B_0$ aus mit dem getilgten Richtungsverktor $\tilde{r}_{B_0B} = \dbinom {-3b}{\,\,\,\,0}$ -->

<p></p>

$$(II)\,\, V_B = \omega_3  \, \tilde{r}_{B_0B}$$

<p></p>

* This results in an equation according to Euler $(II)=(I)$:
<!-- Dadurch ergibt sich eine Gleichung nach Euler $(II)=(I)$: -->

<p></p>

 $$\omega_3  \, \tilde{r}_{B_0B} = \omega \, \tilde{r}_{A_0{A}}  + \omega_2  \,\tilde{r}_{AB}$$

<p></p>

* From this equation we calculate  $\omega_2$ and $\omega_3$. For $\omega_2$, we multiply this by the vector ${r}_{B_0B}$, which removes the unknown $\omega_3$:
<!-- Aus dieser Gleichung berechnen wir $\omega_2$ und $\omega_3$. Für $\omega_2$ multiplizieren wir diese mit dem Vektor ${r}_{B_0B}$, wodurch die Unbekannte $\omega_3$ wegfällt: -->

<p></p>

$$0 = \omega \, \tilde{r}_{A_0{A}} \, {r}_{B_0B}  + \omega_2 \, \tilde{r}_{AB} \, {r}_{B_0B}$$

<p></p>

* Converted to $\omega_2$:
<!-- Umgestellt nach $\omega_2$: -->

<p></p>

$$\omega_2 = - \, \omega \, \frac {\tilde{r}_{A_0A} \, {r}_{B_0B}}{\tilde{r}_{AB} \, {r}_{B_0B}}$$

<p></p>

$$\omega_2 = - \, \omega \, \frac {\dbinom {-b}{b} \dbinom{0}{3b}} {\dbinom {0}{2b} \dbinom{0}{3b}} = -\,  \dfrac {1}2 \, \omega$$

<p></p>

* For the calculation of $\omega_3$ we multiply the Euler equation by the direction vector ${r}_{AB}$ and convert it to $\omega_3$:
<!-- Für die Berechnung von $\omega_3$ multiplizieren wir die Euler-Gleichung mit dem Richtungsvektor ${r}_{AB}$ und stellen diese nach $\omega_3$ um: -->

<p></p>

$$\omega_3 \, \tilde{r}_{B_0B} \, {r}_{AB} = \omega \, \tilde{r}_{A_0{A}} \, {r}_{AB}  + 0$$

<p></p>

$$\omega_3 = \omega \, \frac {\tilde{r}_{A_0A} \, {r}_{AB}}{\tilde{r}_{B_0B} \, {r}_{AB}}$$

<p></p>

$$\omega_3 = \omega \, \dfrac {\dbinom {-b}{\,\,\,\,b} \dbinom{2b}{\,\,0}} {\dbinom {-3b}{\,\,\,\,0} \dbinom{2b}{0}} = \,  \dfrac {1}3 \, \omega$$

<p></p>

* Now we know the angular velocity in the third term, we will put the Euler equation from this:
<!-- Jetzt wo wir die Winkelgeschwindigkeit in drittem Glied wissen, werden wir die Euler-Gleichung von diesem aus, aufstellen: -->

<p></p>

$$\omega_3  \, \tilde{r}_{B_0D} + \omega_4  \, \tilde{r}_{DC} = V_C \, e_x$$

<p></p>

*  As we can see from the mechanism, the point $V_C$  moves only horizontally. To eliminate the unknown $\omega_4$, we multiply the equation by the vector ${r}_{DC}$ :
<!-- Wie wir aus der Zeichnung erkennen können, bewegt sich der Punkt $V_C$ nur horizontal. Um die Unbekannte $\omega_4$ zu eleminieren, mutipliZIeren wir die Gleichung mit den Vektor ${r}_{DC}$ : -->

<p></p>

$$\omega_3  \, \tilde{r}_{B_0D} \, {r}_{DC} = V_C \, e_x \, {r}_{DC}$$

<p></p>

* And convert them to $V_C$:
<!-- Und stellen diese nach $V_C$ um: -->

<p></p>

$$V_C = \omega_3 \, \dfrac {\tilde{r}_{B_0D} \, {r}_{DC}}{e_x \, {r}_{DC}} =  \frac 13 \, \omega \, \frac {\dbinom {-4b}{\,\,\,\,b} \dbinom{\,3b}{-b}} {\dbinom {1}{0} \dbinom{\,3b}{-b}} =  - \frac {13}9 \, \omega \, b$$



