# ***Additional task 1: Bressian circles***

<!-- ***Zusatzaufgabe 1: Bressesche Kreise*** -->



### Determine the Bressian circles of a crank rocker mechanism in the sketched position.

<!-- Bestimmen Sie die Bresseschen Kreise einer Kurbelschwinge in der skizzierten Lage. -->


<figure>
  <img src="Zusatzaufgabe 1.jpg "img">
  <figcaption></figcaption>
</figure>

### Given.: $e, \, \omega = const.$


## _Solution:_

* For the Bressian circles we need the following poles: the momentary pole  $\boldsymbol{r}_{PA}$, the turning pole 1st and 2nd order $\boldsymbol{r}_{PW_1}$ and $\boldsymbol{r}_{PW_2}$, the tangential pole 1st and 2nd order $\boldsymbol{r}_{PT_1}$ and $\boldsymbol{r}_{PT_2}$, the acceleration pole $\boldsymbol{r}_{PQ}$, the jerk pole $\boldsymbol{r}_{PJ}$ and the ball's Point $U$, which we can also calculate as a vector $\boldsymbol{r}_{PU}$.

<!-- * Für die Bresseschen Kreise benötigen wir folgende Pole: den Momentanpol $\boldsymbol{r}_{PA}$, den Wendepol 1. und 2. Ordnung $\boldsymbol{r}_{PW_1}$ und $\boldsymbol{r}_{PW_2}$, den Tangentialpol 1. und 2. Ordnung $\boldsymbol{r}_{PT_1}$ und $\boldsymbol{r}_{PT_2}$, den Beschleunigungspol $\boldsymbol{r}_{PQ}$, den Ruckpol $\boldsymbol{r}_{PJ}$ und den Ballschen Punkt $U$, den wir als Vektor $\boldsymbol{r}_{PU}$ ebensfalls berechnen können.  -->

* So let's first calculate our necessary vector $\boldsymbol{r}_{AP}$ with the following formula for the momentary pole using two pairs of conjugate centers of curvature:

<!-- * Also rechnen wir uns zunächst unseren notwendigen Vektor $\boldsymbol{r}_{AP}$  mit der folgenden Formel für den Momentanpol mittels zweier Paare konjugierter Krümmungsmittelpunkte aus: -->

$$\boldsymbol{r}_{AP} = \dfrac{\boldsymbol{r}_{AB} \, \boldsymbol{\tilde{r}_{BB_0}} }{\boldsymbol{r}_{AA_0} \, \boldsymbol{\tilde{r}_{BB_0}}} \, \boldsymbol{r}_{AA_0}$$(p.18)

<p></p>

$$\boldsymbol{r}_{AP} = \dfrac{\dbinom{e}{e} \, \dbinom{e}{5e} }{\dbinom{\,\,\, 0}{-e}  \, \dbinom{e}{5e} } \, \dbinom{\,\,\, 0}{-e}$$

<p></p>

$$\boldsymbol{r}_{AP} = \dfrac{\,\,\, \,6}{-5} \, \dbinom{\,\,\, 0}{-e}$$

<p></p>

$$\boldsymbol{r}_{AP} = \dbinom{0}{\, \, \frac {6}{5}e}$$



<p></p>

* Theturning pole 1st order $\boldsymbol{r}_{PW_1}$ can be determined by means of momentary pole and two pairs of centers of curvature with the following formula on page 18 from the formulary:

<!-- * Den Wendepol 1. Ordnung $\boldsymbol{r}_{PW_1}$ kann man dann rechnerisch mittels Momentanpol und zweier Paare Krümmungsmittelpunkte mit der dazugehörigen folgenden Formel auf Seite 18 aus der Formelsammlung bestimmen: -->

<p></p>

$$\boldsymbol{r}_{PW_1} = \dfrac{1}{\boldsymbol{\tilde{r}}_{PA} \, \boldsymbol{r}_{PB}} \, \Bigg[{\boldsymbol{r}_{PB}}^2 \, \Bigg(\dfrac{{\boldsymbol{r}_{PB}}^2}{\boldsymbol{r}_{BB_0} \, \boldsymbol{r}_{PB}} + 1 \Bigg) \, \boldsymbol{\tilde{r}}_{PA} - {\boldsymbol{r}_{PA}}^2 \, \Bigg(\dfrac{{\boldsymbol{r}_{PA}}^2}{\boldsymbol{r}_{AA_0} \, \boldsymbol{r}_{PA}} + 1 \Bigg) \, \boldsymbol{\tilde{r}}_{PB} \Bigg]$$(p.18)

<p></p>

* As we can see, we need the vectors for the calculation $\boldsymbol{r}_{PA}$ and $\boldsymbol{\tilde {r}}_{PA}$.

<!-- * Wie wir sehen können benötigen wir für die Berechnung die Vektoren allerdings $\boldsymbol{r}_{PA}$ und $\boldsymbol{\tilde {r}}_{PA}$. -->

* To get from $\boldsymbol{r}_{AP}$ to $\boldsymbol {r}_{PA}$, we have to negate the signs from our calculated vector $\boldsymbol{r}_{AP}$ the X and the Y component.

<!-- * Um aus $\boldsymbol{r}_{AP}$ auf $\boldsymbol{r}_{PA}$ zu schließen, müssen wir aus unserem berechneten Vektor  $\boldsymbol{r}_{AP}$ die Vorzeichen der X- und Y-Komponente negieren. -->

* So  it would be: $\boldsymbol{r}_{PA} = \dbinom{\,\,0}{- \frac {6}{5}e}$ and $\boldsymbol{\tilde {r}}_{PA} = \dbinom{\, \, \, \frac {6}{5}e\,}{0}$
<!-- * Somit wäre $\boldsymbol{r}_{PA} = \dbinom{\,\,0}{- \frac {6}{5}e}$ und $\boldsymbol{\tilde {r}}_{PA} = \dbinom{\, \, \, \frac {6}{5}e\,}{0}$ -->

* The remaining vectors are read directly from the task or from the sketch:

<!-- *  Die übrigen Vektoren lesen wir direkt aus der Aufgabenstellung bzw. aus der Skizze ab: -->

$$\boldsymbol{r}_{PB}= \dbinom {\,\,e}{- \frac {1}{5} e} \,\,\,\,      \boldsymbol{\tilde{r}}_{PB} = \dbinom {\, \frac {1}{5} e}{e} \,\,\,\,    \boldsymbol{r}_{AA_0} = \dbinom {\,\,\,0}{-e} \,\,\,\,               \boldsymbol{r}_{BB_0}= \dbinom {\,\,5e}{-e}$$

<p></p>


* By inserting and calculating you get: 

<!-- * Durch Einsetzen und Ausrechnen erhält man: -->

$$\boldsymbol{r}_{PW_1} = \dfrac{1}{\dbinom{\frac{6}{5} e }{0} \, \dbinom{\,e}{- \frac{1}{5}e}} \, \Bigg[{ \dbinom{\,e}{- \frac{1}{5}e}}^2 \, \Bigg(\dfrac{{ \dbinom{\,e}{- \frac{1}{5}e}}^2}{\dbinom{\,\,\,\,5e}{-e} \, \dbinom{\,e}{- \frac{1}{5}e}} + 1 \Bigg) \, \dbinom{\,\frac{6}{5}e}{0} - {\dbinom{\,\,0}{- \frac {6}{5} e}}^2 \, \Bigg(\dfrac{{\dbinom{\,\,0}{- \frac {6}{5} e}}^2}{\dbinom{\,\,0}{-e} \, \dbinom{\,\,0}{-\frac{6}{5}e}} + 1 \Bigg) \, \dbinom{\frac{1}{5}e}{e} \Bigg]$$

<p></p>

$$\boldsymbol{r}_{PW_1} = \dfrac{1}{{\frac{6}{5}\, e^2}} \, \Bigg[\frac{26}{25}e^2 \, \Bigg(\dfrac{\frac{26}{25}e^2}{\frac{26}{5}e^2} + 1 \Bigg) \, \dbinom{\,\frac{6}{5}e}{0} - \frac{36}{25}e^2 \, \Bigg(\dfrac{\frac{36}{25}e^2}{\frac{6}{5}e^2} + 1 \Bigg) \, \dbinom{\frac{1}{5}e}{e} \Bigg]$$

<p></p>

$$\boldsymbol{r}_{PW_1} = \dfrac{5}{6} \, \Bigg[\frac{156}{125} \, \dbinom{\,\frac{6}{5}e}{0} - \frac{396}{125}  \, \dbinom{\frac{1}{5}e}{e} \Bigg]$$

<p></p>

$$\boldsymbol{r}_{PW_1} = \dbinom{\frac{156}{125} e}{0} - \dbinom{\frac{66}{125} e }{\,\,\frac{66}{25} e}$$

<p></p>

$$\boldsymbol{r}_{PW_1} = \dbinom{\,\,\,\,\,\frac{18}{25}e}{-\frac{66}{25}e}$$

* To get $\boldsymbol{r}_{PT_1}$ through a vectorial calculation on our tangential pole 1st order, we use the following formula:

<!-- * Um auf unseren Tangentialpol 1. Ordnung $\boldsymbol{r}_{PT_1}$ durch eine vektorielle Rechnung zu kommen, verwenden wir folgende Formel: -->

$$\boldsymbol{r}_{PT_1} = \dfrac{{\boldsymbol{r}_{PA}}^2}{\boldsymbol{\tilde r}_{PW_1} \, \boldsymbol{r}_{PA} \, } \, \boldsymbol{\tilde r}_{PW_1}$$

* This formula can be found on page 167 of the book by Stefan Gössner - Mechanism Technique - Vectorial Analysis of Planar Mechanisms

<!-- * Diese Formel entnehmen wir von Seite 167 aus dem Buch von Stefan Gössner - Mechanismentechnik - Vektorielle Analyse ebener Mechanismen. -->

* For the tilde of the vector $\boldsymbol{r}_{PW_1}$ we swap the X and Y components and also negate the new, resulting X-component $\Bigg[\boldsymbol{\tilde {r}}_{PW_1} = \dbinom{\frac{66}{25}e}{\frac {18}{25} e}\Bigg]$

<!-- * Für die Tilde des Vektors $\boldsymbol{r}_{PW_1}$ vertauschen wir die X- und Y-Komponente und negieren zudem noch die neue, dadurch entstandene X-Komponente $\Bigg[\boldsymbol{\tilde {r}}_{PW_1} = \dbinom{\frac{66}{25}e}{\frac {18}{25} e}\Bigg]$ -->

* By inserting and calculating we get for $\boldsymbol{r}_{PT_1}$:

<!-- * Durch Einsetzen und Ausrechnen erhalten wir für $\boldsymbol{r}_{PT_1}$: -->

$$\boldsymbol{r}_{PT_1} = \dfrac{\dfrac {36}{25} e^2}{\dbinom{\frac{66}{25}e}{\frac {18}{25} e} \dbinom{\,\,0}{- \frac {6}{5} e}} \, \dbinom{\frac{66}{25}e}{\frac {18}{25} e}$$

<p></p> 

$$\boldsymbol{r}_{PT_1} = - \dfrac{5}{3} \, \dbinom{\frac{66}{25}e}{\frac {18}{25} e}$$

<p></p> 

$$\boldsymbol{r}_{PT_1} = \dbinom{-\frac{22}{5}e}{-\frac {6}{5} e}$$

* Since we have calculated the tangential pole of the first order, we can calculate the acceleration pole $\boldsymbol{r}_{PQ}$ now.

<!-- * Da wir nun den Tangentialpol 1. Ordnung ausgerechnet haben, können wir darauf aufbauend den Beschleunigungspol $\boldsymbol{r}_{PQ}$ bestimmen. -->

* This is represented by the following formula:

<!-- * Dieser wird mit folgender Formel dargestellt: -->

$$\boldsymbol{r}_{PQ} = \dfrac{{\boldsymbol{\tilde r}_{WT}} \, \boldsymbol r_{PW_1}} {{\boldsymbol r_{WT}}^2} \,  {\boldsymbol{\tilde r}_{WT}}$$

* Here we see that we need the vector $\boldsymbol r_{WT}$ and its tilde.

<!-- * Hier sehen wir, dass wir den Vektor $\boldsymbol r_{WT}$ und dessen Tilde benötigen. -->

* The formula for this is:

<!-- * Die Formel hierfür lautet:  -->

$$\boldsymbol{r}_{WT} = \boldsymbol{r}_{PT_1} - \boldsymbol{r}_{PW_1}$$

* These two formulas are also taken from page 167 of the above literature.

<!-- * Diese beiden Formeln entnehmen wir ebenso von Seite 167 der oben genannten Literatur. -->

* So  $\boldsymbol{r}_{WT}$ would be:

$$\boldsymbol{r}_{WT} = \dbinom {- \frac {22}{5}e}{- \frac {6}{5}e} - \dbinom {\,\,\,\,\frac {18}{25}e}{-\frac{66}{25}e}$$

<p></p> 

$$\boldsymbol{r}_{WT} = \dbinom {- \frac {128}{25}e}{\,\,\,\, \frac {36}{25}e}  \,\,\,\, \boldsymbol{\tilde r}_{WT} = \dbinom {- \frac {36}{25}e}{- \frac {128}{25}e}$$

<p></p> 

* These vectors are now inserted into our formula for the acceleration pole $\boldsymbol{r}_{PQ}$ and we calculate it:

<!-- * Diese Vektoren setzen wir nun in unsere Formel für den Beschleunigungspol $\boldsymbol{r}_{PQ}$ ein und rechnen ihn aus: -->

<p></p> 

$$\boldsymbol{r}_{PQ} = \dfrac{\dbinom{- \frac {36}{25}e}{-\frac{128}{25}e} \, \dbinom{\,\,\,\,\,\frac {18}{25}e}{-\frac{66}{25}e}} {{\dbinom{-\frac{128}{25}e}{\,\,\,\,\,\,\frac {36}{25}e}}^2} \,  \dbinom{-\frac {36}{25}e}{- \frac {128}{25} e}$$

<p></p> 

$$\boldsymbol{r}_{PQ} = \frac {15}{34} \, \dbinom{-\frac {36}{25}e}{- \frac {128}{25} e}$$

<p></p> 

$$\boldsymbol{r}_{PQ} = \dbinom{-\frac {54}{85}e}{- \frac {192}{85} e}$$

<p></p> 

* Now we are looking for the location of the 2nd turning pole. Vectorially, this is calculated as follows:

<!-- * Nun suchen wir die Lage des 2. Wendepols. Vektoriell wird dieser wie folgt berechnet: -->

<p></p> 

$$\boldsymbol{r}_{PW_2} = {\boldsymbol r_{PA}}- \Bigg(\dfrac{{\boldsymbol r_{PA}}^2}{(\boldsymbol{\tilde{r}}_{PW} \, \boldsymbol{r}_{PA}) \, (\boldsymbol{\tilde{r}}_{PA} \, \boldsymbol{r}_{PB})} \Bigg) \,           \Bigg[\dfrac{(\boldsymbol{\tilde{r}}_{PW} \, \boldsymbol{r}_{PB})(\boldsymbol{r}_{PW} - \boldsymbol{r}_{PB}) \, {\boldsymbol{r}_{PB}}}{{\boldsymbol{r}_{PB}}^2 }   -  \dfrac{(\boldsymbol{\tilde{r}}_{PW} \, \boldsymbol{r}_{PA})(\boldsymbol{r}_{PW} - \boldsymbol{r}_{PA}) \, {\boldsymbol{r}_{PB}}}{{\boldsymbol{r}_{PA}}^2 }       \Bigg]\boldsymbol{\tilde{r}}_{PA}$$

<p></p> 

* By inserting you get:

<!-- * Durch Einsetzen erhält man dann: -->

<p></p> 

$$\boldsymbol{r}_{PW_2} = {\dbinom{\,0}{- \frac{6}{5}e}} \, - \, \Bigg(\dfrac{{ \dbinom{\,0}{- \frac{6}{5}e}}^2}{\Bigg[\dbinom{\frac{66}{25}e}{\frac{18}{25}e} \, \dbinom{\,0}{- \frac{6}{5}e}\Bigg] \Bigg[ \dbinom{\frac{6}{5}e}{0} \, \dbinom{\,e}{- \frac{1}{5}e}\Bigg] }\Bigg) \,                                        \Bigg[\dfrac{\Bigg[\dbinom{\frac{66}{25}e}{\frac{18}{25}e} \dbinom{e}{-\frac{1}{5}e} \Bigg] \Bigg[\dbinom{\,\,\,\,\,\frac{18}{25}e}{-\frac{66}{25}e} -\dbinom{e}{-\frac{1}{5}e} \Bigg] \dbinom{e}{-\frac{1}{5}e}}{\dbinom{e}{-\frac{1}{5}e}^2 } - \dfrac{\Bigg[\dbinom{\frac{66}{25}e}{\frac{18}{25}e} \dbinom{0}{-\frac{6}{5}e} \Bigg] \Bigg[\dbinom{\,\,\,\,\,\frac{18}{25}e}{-\frac{66}{25}e} -\dbinom{0}{-\frac{6}{5}e} \Bigg] \dbinom{e}{-\frac{1}{5}e}}{\, \dbinom{\,\,0}{-\frac{6}{5}e}^2 } \Bigg] \, \binom{\frac{6}{5}e}{0}$$

<p></p> 

$$\boldsymbol{r}_{PW_2} = {\dbinom{\,0}{- \frac{6}{5}e}} \, - \Big(- \frac {25}{18} \cdot \frac{1}{e^2}\Big) \Big[\frac {138}{125} \cdot e^2 \Big] \binom{\frac{6}{5}e}{0}$$

<p></p> 

$$\boldsymbol{r}_{PW_2} = {\dbinom{\,\,\,\,\frac{46}{25}e}{- \frac{6}{5}e}}$$

<p></p> 

* It follows for $\boldsymbol{\tilde r}_{PW_2} = {\dbinom{\frac{6}{5}e}{\frac{46}{25}e}}$

* With the calculated vectors we can now conclude our 2nd order tangential pole.

<!-- * Mit den nun ausgerechneten Vektoren können wir jetzt auf unseren Tangetialpol 2. Ordnung schließen. -->

$$\boldsymbol{r}_{PT_2} = \dfrac{3 \, \omega \, \dot{\omega} }{\ddot{\omega} - \omega^3 } \, \boldsymbol{\tilde r}_{PW_2}$$

* To deduce the exact position of the second-order tangential pole, we first have to derive the formula with vectorial data.

<!-- * Um auf die genaue Lage des Tangentialpols 2. Ordnung zu schließen, müssen wir uns zunächst die Formel mit Vektoriellen Angaben herleiten.  -->

* It consists of the following two formulas, which we can find on page 169:

<!-- * Diese setzt sich aus folgenden zwei Formeln zusammen, die wir auf Seite 169 finden können: -->

<p></p> 

$$3 \, \omega \, \dot{\omega} = 3 \, \omega^3 \ \dfrac{{\boldsymbol{\tilde r}_{PW_1}} \, \boldsymbol r_{PA}} {{\boldsymbol r_{PA}}^2}$$

<p></p> 

$$(\ddot{\omega} - \omega^3) = \omega^3 \, \Bigg[\dfrac{3}{\boldsymbol{\tilde{r}}_{PA} \, \boldsymbol{r}_{PB}}\Bigg(\dfrac{(\boldsymbol{\tilde{r}}_{PW_1} \, \boldsymbol{r}_{PB})(\boldsymbol{r}_{PW_1} - \boldsymbol{r}_{PB}) \, {\boldsymbol{r}_{PB}}}{{\boldsymbol{r}_{PB}}^2 }   -  \dfrac{(\boldsymbol{\tilde{r}}_{PW_1} \, \boldsymbol{r}_{PA})(\boldsymbol{r}_{PW_1} - \boldsymbol{r}_{PA}) \, {\boldsymbol{r}_{PB}}}{{\boldsymbol{r}_{PA}}^2 } \Bigg) - \Bigg(\dfrac{\boldsymbol{r}_{PW_1} \,  \boldsymbol{r}_{PA}}{{\boldsymbol{r}_{PA}}^2 } - 1\Bigg)^2     \, \, \Bigg]$$


<p></p> 


* So we get for $\boldsymbol{r}_{PT_2}$ :


<p></p> 

$$\boldsymbol{r}_{PT_2} = \dfrac{3 \, \cancel{\omega^3} \ \dfrac{{\boldsymbol{\tilde r}_{PW_1}} \, \boldsymbol r_{PA}} {{\boldsymbol r_{PA}}^2} }{\cancel{\omega^3} \, \Bigg[\dfrac{3}{\boldsymbol{\tilde{r}}_{PA} \, \boldsymbol{r}_{PB}}\Bigg(\dfrac{(\boldsymbol{\tilde{r}}_{PW_1} \, \boldsymbol{r}_{PB})(\boldsymbol{r}_{PW_1} - \boldsymbol{r}_{PB}) \, {\boldsymbol{r}_{PB}}}{{\boldsymbol{r}_{PB}}^2 }   -  \dfrac{(\boldsymbol{\tilde{r}}_{PW_1} \, \boldsymbol{r}_{PA})(\boldsymbol{r}_{PW_1} - \boldsymbol{r}_{PA}) \, {\boldsymbol{r}_{PB}}}{{\boldsymbol{r}_{PA}}^2 } \Bigg) - \Bigg(\dfrac{\boldsymbol{r}_{PW_1} \,  \boldsymbol{r}_{PA}}{{\boldsymbol{r}_{PA}}^2 } - 1\Bigg)^2     \, \, \Bigg]} \cdot \boldsymbol{\tilde{r}}_{PW_2}$$

<p></p> 

* Used and calculated it would be like this:

<p></p> 


$$\boldsymbol{r}_{PT_2} =  \dfrac{3 \cdot \,  \dfrac{\dbinom{\frac{66}{25}e }{{\frac{18}{25}}e} \dbinom{\,\, 0}{-\frac{6}{5}e} } {{\dbinom{\,\, 0}{-\frac{6}{5}e}}^2}}{\dfrac{3}{\dbinom{\frac{6}{5}e}{0} \, \dbinom{\,\,e}{- \frac{1}{5}e}}       \cdot            \Bigg(\dfrac{\Bigg[\dbinom{\frac{66}{25}e}{\frac{18}{25}e} \dbinom{e}{-\frac{1}{5}e} \Bigg] \Bigg[\dbinom{\,\,\,\,\,\frac{18}{25}e}{-\frac{66}{25}e} -\dbinom{e}{-\frac{1}{5}e} \Bigg] \dbinom{e}{-\frac{1}{5}e}}{\dbinom{e}{-\frac{1}{5}e}^2 } - \dfrac{\Bigg[\dbinom{\frac{66}{25}e}{\frac{18}{25}e} \dbinom{0}{-\frac{6}{5}e} \Bigg] \Bigg[\dbinom{\,\,\,\,\,\frac{18}{25}e}{-\frac{66}{25}e} -\dbinom{0}{-\frac{6}{5}e} \Bigg] \dbinom{e}{-\frac{1}{5}e}}{\, \dbinom{\,\,0}{-\frac{6}{5}e}^2 } \Bigg) - \Bigg(\dfrac{\dbinom{\,\,\,\,\,\frac{18}{25}e }{{- \frac{66}{25}}e} \dbinom{\,\, 0}{-\frac{6}{5}e} } {{\dbinom{\,\, 0}{-\frac{6}{5}e}}^2}- 1\Bigg)^2     \, \, } \,\, \cdot {\dbinom{\frac{6}{5}e}{\frac{46}{25}e}}$$

<p></p> 

$$\boldsymbol{r}_{PT_2} =  \dfrac{-\dfrac{9}{5}}{\dfrac{5}{2} \cdot\dfrac{1}{\,\,e^2}       \cdot            \Bigg(\dfrac{138}{125} \cdot \ e^2 \Bigg) - \Bigg(\dfrac {36}{25}\Bigg)     \, \, } \,\, \cdot {\dbinom{\frac{6}{5}e}{\frac{46}{25}e}}$$

<p></p> 

$$\boldsymbol{r}_{PT_2} = {\dbinom{-\frac{18}{11}e}{-\frac{138}{55}e}}$$

<p></p> 

* In order to determine our jerk pole, you need the vector $\boldsymbol {r}_{WT_2}$ first. This is determined by subtracting $\boldsymbol{r}_{PT_2}$ and $\boldsymbol{r}_{PW_2}$ (p.171):

<!-- * Um unseren Ruckpol bestimmen zu können, benötigen zunächst den Vektor $\boldsymbol{r}_{WT_2}$. Dieser wird durch subtraktion von $\boldsymbol{r}_{PT_2}$ und $\boldsymbol{r}_{PW_2}$ bestimmt (S.171): -->

<p></p> 

$$\boldsymbol{r}_{WT_2} = \boldsymbol{r}_{PT_2} - \boldsymbol{r}_{PW_2}$$

<p></p> 

$$\boldsymbol{r}_{WT_2} = {\dbinom{-\frac{18}{11}e}{-\frac{138}{55}e}} - {\dbinom{\,\,\,\,\frac{46}{25}e}{- \frac{6}{5}e}}$$

<p></p> 

$$\boldsymbol{r}_{WT_2} = {\dbinom{-\frac{956}{275}e}{-\frac{72}{55}e}}$$

*  For $\boldsymbol{\tilde r}_{WT_2}$ we get: $\boldsymbol{\tilde r}_{WT_2} ={\dbinom{\,\,\, \,\,\frac{72}{55}e}{-\frac{956}{275}e}}$

<p></p> 

* Now we can calculate the jerk pole:

<p></p> 

$$\boldsymbol{r}_{PJ} = \dfrac{{\boldsymbol{\tilde r}_{WT_2}} \, \boldsymbol r_{PW_2}} {{\boldsymbol r_{WT_2}}^2} \,  {\boldsymbol{\tilde r}_{WT_2}}$$


<p></p> 

$$\boldsymbol{r}_{PJ} = \dfrac{\dbinom{\,\,\, \frac {72}{55}e}{-\frac{956}{275}e} \, \dbinom{\,\,\,\frac {46}{25}e}{-\frac{6}{5}e}} {{\dbinom{-\frac{956}{275}e}{-\frac {72}{55}e}}^2} \, \cdot  \dbinom{\,\,\,\,\frac {72}{55}e}{- \frac {956}{275} e}$$

<p></p> 

$$\boldsymbol{r}_{PJ} = \frac{3016}{6325} \cdot  \dbinom{\,\,\,\,\frac {72}{55}e}{- \frac {956}{275} e}$$

<p></p> 

$$\boldsymbol{r}_{PJ} = \dbinom{\,\,\,\frac {78}{125}e}{- \frac {83}{50} e}$$

* Last but not least, we take care of the ball's point. This is calculated as the vector $\boldsymbol{r}_{PU}$.

<!-- * Zu guter letzt kümmern wir uns um dem Ballschen Punkt. Dieser wird als Vektor $\boldsymbol{r}_{PU}$ berechnet. -->

* For this we need the vector $\boldsymbol{r}_{WW_2}$, which is calculated as follows:

<!-- * Hierfür benötigen wir den Vektor $\boldsymbol{r}_{WW_2}$, der wie folgt berechnet wird: -->



$$\boldsymbol{r}_{WW_2} = \boldsymbol{r}_{PW_2} - \boldsymbol{r}_{PW_1}$$

<p></p> 

$$\boldsymbol{r}_{WW_2} = {\dbinom{\,\,\, \frac{46}{25}e}{-\frac{6}{5}e}} - {\dbinom{\,\,\,\,\frac{18}{25}e}{- \frac{66}{25}e}}$$

<p></p> 

$$\boldsymbol{r}_{WW_2} = {\dbinom{\frac{28}{25}e}{\frac{36}{25}e}}$$

*  For $\boldsymbol{\tilde r}_{WW_2}$ we get: $\boldsymbol{\tilde r}_{WW_2} ={\dbinom{-\frac{36}{25}e}{ \,\,\,\, \frac{28}{25}e}}$


* So the ball's point would be:

$$\boldsymbol{r}_{PU} = \dfrac{{\boldsymbol{\tilde r}_{WW_2}} \, \boldsymbol r_{PW_1}} {{\boldsymbol r_{WW_2}}^2}  \cdot  {\boldsymbol{\tilde r}_{WW_2}}$$

<p></p> 

$$\boldsymbol{r}_{PU} = \dfrac{\dbinom{-\frac {36}{25}e}{\,\,\,\,\,\frac{28}{25}e} \, \dbinom{\,\,\,\,\,\frac {18}{25}e}{-\frac{66}{25}e}} {{\dbinom{\frac{28}{25}e}{\frac {36}{25}e}}^2} \, \cdot  \dbinom{-\frac {36}{25}e}{\,\,\,\,\,\frac {28}{25} e}$$

<p></p> 

$$\boldsymbol{r}_{PU} = -\frac{6}{5} \cdot  \dbinom{-\frac {36}{25}e}{\,\,\,\,\,\frac {28}{25} e}$$

<p></p> 

$$\boldsymbol{r}_{PU} = \dbinom{\,\,\,\,\frac {216}{125}e}{- \frac {168}{125} e}$$