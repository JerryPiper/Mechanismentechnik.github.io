# ***Zusatzaufgabe 1: Bressesche Kreise***



### Bestimmen Sie die Bresseschen Kreise einer Kurbelschwinge in der skizzierten Lage.


<figure>
  <img src="Zusatzaufgabe 1.jpg "img">
  <figcaption></figcaption>
</figure>

### Geg.: $e, \, \omega = const.$


## _Lösung:_

* Für die Bresseschen Kreise benötigen wir folgende Pole: den Momentanpol $\boldsymbol{r}_{PA}$, den Wendepol 1. und 2. Ordnung $\boldsymbol{r}_{PW_1}$ und $\boldsymbol{r}_{PW_2}$, den Tangentialpol 1. und 2. Ordnung $\boldsymbol{r}_{PT_1}$ und $\boldsymbol{r}_{PT_2}$, den Beschleunigungspol $\boldsymbol{r}_{PQ}$, den Ruckpol $\boldsymbol{r}_{PJ}$ und den Ballschen Punkt $U$, den wir als Vektor $\boldsymbol{r}_{PU}$ ebensfalls berechnen können. 

* Also rechnen wir uns zunächst unseren notwendigen Vektor $\boldsymbol{r}_{AP}$  mit der folgenden Formel für den Momentanpol mittels zweier Paare konjugierter Krümmungsmittelpunkte aus:

$$\boldsymbol{r}_{AP} = \dfrac{\boldsymbol{r}_{AB} \, \boldsymbol{\tilde{r}_{BB_0}} }{\boldsymbol{r}_{AA_0} \, \boldsymbol{\tilde{r}_{BB_0}}} \, \boldsymbol{r}_{AA_0}$$(S.18)

<p></p>

$$\boldsymbol{r}_{AP} = \dfrac{\dbinom{e}{e} \, \dbinom{e}{5e} }{\dbinom{\,\,\, 0}{-e}  \, \dbinom{e}{5e} } \, \dbinom{\,\,\, 0}{-e}$$

<p></p>

$$\boldsymbol{r}_{AP} = \dfrac{\,\,\, \,6}{-5} \, \dbinom{\,\,\, 0}{-e}$$

<p></p>

$$\boldsymbol{r}_{AP} = \dbinom{0}{\, \, \frac {6}{5}e}$$



<p></p>


* Den Wendepol 1. Ordnung $\boldsymbol{r}_{PW_1}$ kann man dann rechnerisch mittels Momentanpol und zweier Paare Krümmungsmittelpunkte mit der dazugehörigen folgenden Formel auf Seite 18 aus der Formelsammlung bestimmen:

<p></p>

$$\boldsymbol{r}_{PW_1} = \dfrac{1}{\boldsymbol{\tilde{r}}_{PA} \, \boldsymbol{r}_{PB}} \, \Bigg[{\boldsymbol{r}_{PB}}^2 \, \Bigg(\dfrac{{\boldsymbol{r}_{PB}}^2}{\boldsymbol{r}_{BB_0} \, \boldsymbol{r}_{PB}} + 1 \Bigg) \, \boldsymbol{\tilde{r}}_{PA} - {\boldsymbol{r}_{PA}}^2 \, \Bigg(\dfrac{{\boldsymbol{r}_{PA}}^2}{\boldsymbol{r}_{AA_0} \, \boldsymbol{r}_{PA}} + 1 \Bigg) \, \boldsymbol{\tilde{r}}_{PB} \Bigg]$$(S.18)

<p></p>

* Wie wir sehen können, benötigen wir für die Berechnung die Vektoren allerdings $\boldsymbol{r}_{PA}$ und $\boldsymbol{\tilde {r}}_{PA}$.


* Um aus $\boldsymbol{r}_{AP}$ auf $\boldsymbol{r}_{PA}$ zu schließen, müssen wir aus unserem berechneten Vektor  $\boldsymbol{r}_{AP}$ die Vorzeichen der X- und Y-Komponente negieren.


* Somit wäre $\boldsymbol{r}_{PA} = \dbinom{\,\,0}{- \frac {6}{5}e}$ und $\boldsymbol{\tilde {r}}_{PA} = \dbinom{\, \, \, \frac {6}{5}e\,}{0}$


*  Die übrigen Vektoren lesen wir direkt aus der Aufgabenstellung bzw. aus der Skizze ab:

$$\boldsymbol{r}_{PB}= \dbinom {\,\,e}{- \frac {1}{5} e} \,\,\,\,      \boldsymbol{\tilde{r}}_{PB} = \dbinom {\, \frac {1}{5} e}{e} \,\,\,\,    \boldsymbol{r}_{AA_0} = \dbinom {\,\,\,0}{-e} \,\,\,\,               \boldsymbol{r}_{BB_0}= \dbinom {\,\,5e}{-e}$$

<p></p>

* Durch Einsetzen und Ausrechnen erhält man:

$$\boldsymbol{r}_{PW_1} = \dfrac{1}{\dbinom{\frac{6}{5} e }{0} \, \dbinom{\,e}{- \frac{1}{5}e}} \, \Bigg[{ \dbinom{\,e}{- \frac{1}{5}e}}^2 \, \Bigg(\dfrac{{ \dbinom{\,e}{- \frac{1}{5}e}}^2}{\dbinom{\,\,\,\,5e}{-e} \, \dbinom{\,e}{- \frac{1}{5}e}} + 1 \Bigg) \, \dbinom{\,\frac{6}{5}e}{0} - {\dbinom{\,\,0}{- \frac {6}{5} e}}^2 \, \Bigg(\dfrac{{\dbinom{\,\,0}{- \frac {6}{5} e}}^2}{\dbinom{\,\,0}{-e} \, \dbinom{\,\,0}{-\frac{6}{5}e}} + 1 \Bigg) \, \dbinom{\frac{1}{5}e}{e} \Bigg]$$

<p></p>

$$\boldsymbol{r}_{PW_1} = \dfrac{1}{{\frac{6}{5}\, e^2}} \, \Bigg[\frac{26}{25}e^2 \, \Bigg(\dfrac{\frac{26}{25}e^2}{\frac{26}{5}e^2} + 1 \Bigg) \, \dbinom{\,\frac{6}{5}e}{0} - \frac{36}{25}e^2 \, \Bigg(\dfrac{\frac{36}{25}e^2}{\frac{6}{5}e^2} + 1 \Bigg) \, \dbinom{\frac{1}{5}e}{e} \Bigg]$$

<p></p>

$$\boldsymbol{r}_{PW_1} = \dfrac{5}{6} \, \Bigg[\frac{156}{125} \, \dbinom{\,\frac{6}{5}e}{0} - \frac{396}{125}  \, \dbinom{\frac{1}{5}e}{e} \Bigg]$$

<p></p>

$$\boldsymbol{r}_{PW_1} = \dbinom{\frac{156}{125} e}{0} - \dbinom{\frac{66}{125} e }{\,\,\frac{66}{25} e}$$

<p></p>

$$\boldsymbol{r}_{PW_1} = \dbinom{\,\,\,\,\,\frac{18}{25}e}{-\frac{66}{25}e}$$

* Um auf unseren Tangentialpol 1. Ordnung $\boldsymbol{r}_{PT_1}$ durch eine vektorielle Rechnung zu kommen, verwenden wir folgende Formel:

$$\boldsymbol{r}_{PT_1} = \dfrac{{\boldsymbol{r}_{PA}}^2}{\boldsymbol{\tilde r}_{PW_1} \, \boldsymbol{r}_{PA} \, } \, \boldsymbol{\tilde r}_{PW_1}$$

* Diese Formel entnehmen wir von Seite 167 aus dem Buch von Stefan Gössner - Mechanismentechnik - Vektorielle Analyse ebener Mechanismen.


* Für die Tilde des Vektors $\boldsymbol{r}_{PW_1}$ vertauschen wir die X- und Y-Komponente und negieren zudem noch die neue, dadurch entstandene X-Komponente $\Bigg[\boldsymbol{\tilde {r}}_{PW_1} = \dbinom{\frac{66}{25}e}{\frac {18}{25} e}\Bigg]$

* Durch Einsetzen und Ausrechnen erhalten wir für $\boldsymbol{r}_{PT_1}$:

$$\boldsymbol{r}_{PT_1} = \dfrac{\dfrac {36}{25} e^2}{\dbinom{\frac{66}{25}e}{\frac {18}{25} e} \dbinom{\,\,0}{- \frac {6}{5} e}} \, \dbinom{\frac{66}{25}e}{\frac {18}{25} e}$$

<p></p> 

$$\boldsymbol{r}_{PT_1} = - \dfrac{5}{3} \, \dbinom{\frac{66}{25}e}{\frac {18}{25} e}$$

<p></p> 

$$\boldsymbol{r}_{PT_1} = \dbinom{-\frac{22}{5}e}{-\frac {6}{5} e}$$

* Da wir nun den Tangentialpol 1. Ordnung ausgerechnet haben, können wir darauf aufbauend den Beschleunigungspol $\boldsymbol{r}_{PQ}$ bestimmen.

* Dieser wird mit folgender Formel dargestellt:

$$\boldsymbol{r}_{PQ} = \dfrac{{\boldsymbol{\tilde r}_{WT}} \, \boldsymbol r_{PW_1}} {{\boldsymbol r_{WT}}^2} \,  {\boldsymbol{\tilde r}_{WT}}$$

* Hier sehen wir, dass wir den Vektor $\boldsymbol r_{WT}$ und dessen Tilde benötigen.

* Die Formel hierfür lautet: 

$$\boldsymbol{r}_{WT} = \boldsymbol{r}_{PT_1} - \boldsymbol{r}_{PW_1}$$



* Diese beiden Formeln entnehmen wir ebenso von Seite 167 der oben genannten Literatur.

* Somit wäre  $\boldsymbol{r}_{WT}$:

$$\boldsymbol{r}_{WT} = \dbinom {- \frac {22}{5}e}{- \frac {6}{5}e} - \dbinom {\,\,\,\,\frac {18}{25}e}{-\frac{66}{25}e}$$

<p></p> 

$$\boldsymbol{r}_{WT} = \dbinom {- \frac {128}{25}e}{\,\,\,\, \frac {36}{25}e}  \,\,\,\, \boldsymbol{\tilde r}_{WT} = \dbinom {- \frac {36}{25}e}{- \frac {128}{25}e}$$

<p></p> 

* Diese Vektoren setzen wir nun in unsere Formel für den Beschleunigungspol $\boldsymbol{r}_{PQ}$ ein und rechnen ihn aus:

<p></p> 

$$\boldsymbol{r}_{PQ} = \dfrac{\dbinom{- \frac {36}{25}e}{-\frac{128}{25}e} \, \dbinom{\,\,\,\,\,\frac {18}{25}e}{-\frac{66}{25}e}} {{\dbinom{-\frac{128}{25}e}{\,\,\,\,\,\,\frac {36}{25}e}}^2} \,  \dbinom{-\frac {36}{25}e}{- \frac {128}{25} e}$$

<p></p> 

$$\boldsymbol{r}_{PQ} = \frac {15}{34} \, \dbinom{-\frac {36}{25}e}{- \frac {128}{25} e}$$

<p></p> 

$$\boldsymbol{r}_{PQ} = \dbinom{-\frac {54}{85}e}{- \frac {192}{85} e}$$

<p></p> 

* Nun suchen wir die Lage des 2. Wendepols. Vektoriell wird dieser wie folgt berechnet:

<p></p> 

$$\boldsymbol{r}_{PW_2} = {\boldsymbol r_{PA}}- \Bigg(\dfrac{{\boldsymbol r_{PA}}^2}{(\boldsymbol{\tilde{r}}_{PW} \, \boldsymbol{r}_{PA}) \, (\boldsymbol{\tilde{r}}_{PA} \, \boldsymbol{r}_{PB})} \Bigg) \,           \Bigg[\dfrac{(\boldsymbol{\tilde{r}}_{PW} \, \boldsymbol{r}_{PB})(\boldsymbol{r}_{PW} - \boldsymbol{r}_{PB}) \, {\boldsymbol{r}_{PB}}}{{\boldsymbol{r}_{PB}}^2 }   -  \dfrac{(\boldsymbol{\tilde{r}}_{PW} \, \boldsymbol{r}_{PA})(\boldsymbol{r}_{PW} - \boldsymbol{r}_{PA}) \, {\boldsymbol{r}_{PB}}}{{\boldsymbol{r}_{PA}}^2 }       \Bigg]\boldsymbol{\tilde{r}}_{PA}$$

<p></p> 

* Durch Einsetzen erhält man dann:

<p></p> 

$$\boldsymbol{r}_{PW_2} = {\dbinom{\,0}{- \frac{6}{5}e}} \, - \, \Bigg(\dfrac{{ \dbinom{\,0}{- \frac{6}{5}e}}^2}{\Bigg[\dbinom{\frac{66}{25}e}{\frac{18}{25}e} \, \dbinom{\,0}{- \frac{6}{5}e}\Bigg] \Bigg[ \dbinom{\frac{6}{5}e}{0} \, \dbinom{\,e}{- \frac{1}{5}e}\Bigg] }\Bigg) \,                                        \Bigg[\dfrac{\Bigg[\dbinom{\frac{66}{25}e}{\frac{18}{25}e} \dbinom{e}{-\frac{1}{5}e} \Bigg] \Bigg[\dbinom{\,\,\,\,\,\frac{18}{25}e}{-\frac{66}{25}e} -\dbinom{e}{-\frac{1}{5}e} \Bigg] \dbinom{e}{-\frac{1}{5}e}}{\dbinom{e}{-\frac{1}{5}e}^2 } - \dfrac{\Bigg[\dbinom{\frac{66}{25}e}{\frac{18}{25}e} \dbinom{0}{-\frac{6}{5}e} \Bigg] \Bigg[\dbinom{\,\,\,\,\,\frac{18}{25}e}{-\frac{66}{25}e} -\dbinom{0}{-\frac{6}{5}e} \Bigg] \dbinom{e}{-\frac{1}{5}e}}{\, \dbinom{\,\,0}{-\frac{6}{5}e}^2 } \Bigg] \, \binom{\frac{6}{5}e}{0}$$

<p></p> 

$$\boldsymbol{r}_{PW_2} = {\dbinom{\,0}{- \frac{6}{5}e}} \, - \Big(- \frac {25}{18} \cdot \frac{1}{e^2}\Big) \Big[\frac {138}{125} \cdot e^2 \Big] \binom{\frac{6}{5}e}{0}$$

<p></p> 

$$\boldsymbol{r}_{PW_2} = {\dbinom{\,\,\,\,\frac{46}{25}e}{- \frac{6}{5}e}}$$

<p></p> 

* Daraus folgt für $\boldsymbol{\tilde r}_{PW_2} = {\dbinom{\frac{6}{5}e}{\frac{46}{25}e}}$


* Mit den nun ausgerechneten Vektoren können wir jetzt auf unseren Tangetialpol 2. Ordnung schließen.

$$\boldsymbol{r}_{PT_2} = \dfrac{3 \, \omega \, \dot{\omega} }{\ddot{\omega} - \omega^3 } \, \boldsymbol{\tilde r}_{PW_2}$$

* Um auf die genaue Lage des Tangentialpols 2. Ordnung zu schließen, müssen wir uns zunächst die Formel mit vektoriellen Angaben herleiten. 

* Diese setzt sich aus folgenden zwei Formeln zusammen, die wir auf Seite 169 finden können:

<p></p> 

$$3 \, \omega \, \dot{\omega} = 3 \, \omega^3 \ \dfrac{{\boldsymbol{\tilde r}_{PW_1}} \, \boldsymbol r_{PA}} {{\boldsymbol r_{PA}}^2}$$

<p></p> 

$$(\ddot{\omega} - \omega^3) = \omega^3 \, \Bigg[\dfrac{3}{\boldsymbol{\tilde{r}}_{PA} \, \boldsymbol{r}_{PB}}\Bigg(\dfrac{(\boldsymbol{\tilde{r}}_{PW_1} \, \boldsymbol{r}_{PB})(\boldsymbol{r}_{PW_1} - \boldsymbol{r}_{PB}) \, {\boldsymbol{r}_{PB}}}{{\boldsymbol{r}_{PB}}^2 }   -  \dfrac{(\boldsymbol{\tilde{r}}_{PW_1} \, \boldsymbol{r}_{PA})(\boldsymbol{r}_{PW_1} - \boldsymbol{r}_{PA}) \, {\boldsymbol{r}_{PB}}}{{\boldsymbol{r}_{PA}}^2 } \Bigg) - \Bigg(\dfrac{\boldsymbol{r}_{PW_1} \,  \boldsymbol{r}_{PA}}{{\boldsymbol{r}_{PA}}^2 } - 1\Bigg)^2     \, \, \Bigg]$$


<p></p> 


* Somit ergibt sich für $\boldsymbol{r}_{PT_2}$ :


<p></p> 

$$\boldsymbol{r}_{PT_2} = \dfrac{3 \, \cancel{\omega^3} \ \dfrac{{\boldsymbol{\tilde r}_{PW_1}} \, \boldsymbol r_{PA}} {{\boldsymbol r_{PA}}^2} }{\cancel{\omega^3} \, \Bigg[\dfrac{3}{\boldsymbol{\tilde{r}}_{PA} \, \boldsymbol{r}_{PB}}\Bigg(\dfrac{(\boldsymbol{\tilde{r}}_{PW_1} \, \boldsymbol{r}_{PB})(\boldsymbol{r}_{PW_1} - \boldsymbol{r}_{PB}) \, {\boldsymbol{r}_{PB}}}{{\boldsymbol{r}_{PB}}^2 }   -  \dfrac{(\boldsymbol{\tilde{r}}_{PW_1} \, \boldsymbol{r}_{PA})(\boldsymbol{r}_{PW_1} - \boldsymbol{r}_{PA}) \, {\boldsymbol{r}_{PB}}}{{\boldsymbol{r}_{PA}}^2 } \Bigg) - \Bigg(\dfrac{\boldsymbol{r}_{PW_1} \,  \boldsymbol{r}_{PA}}{{\boldsymbol{r}_{PA}}^2 } - 1\Bigg)^2     \, \, \Bigg]} \cdot \boldsymbol{\tilde{r}}_{PW_2}$$

<p></p> 

* Eingesetzt und ausgerechnet würde es wie folgt lauten:

<p></p> 

$$\boldsymbol{r}_{PT_2} =  \dfrac{3 \cdot \,  \dfrac{\dbinom{\frac{66}{25}e }{{\frac{18}{25}}e} \dbinom{\,\, 0}{-\frac{6}{5}e} } {{\dbinom{\,\, 0}{-\frac{6}{5}e}}^2}}{\dfrac{3}{\dbinom{\frac{6}{5}e}{0} \, \dbinom{\,\,e}{- \frac{1}{5}e}}       \cdot            \Bigg(\dfrac{\Bigg[\dbinom{\frac{66}{25}e}{\frac{18}{25}e} \dbinom{e}{-\frac{1}{5}e} \Bigg] \Bigg[\dbinom{\,\,\,\,\,\frac{18}{25}e}{-\frac{66}{25}e} -\dbinom{e}{-\frac{1}{5}e} \Bigg] \dbinom{e}{-\frac{1}{5}e}}{\dbinom{e}{-\frac{1}{5}e}^2 } - \dfrac{\Bigg[\dbinom{\frac{66}{25}e}{\frac{18}{25}e} \dbinom{0}{-\frac{6}{5}e} \Bigg] \Bigg[\dbinom{\,\,\,\,\,\frac{18}{25}e}{-\frac{66}{25}e} -\dbinom{0}{-\frac{6}{5}e} \Bigg] \dbinom{e}{-\frac{1}{5}e}}{\, \dbinom{\,\,0}{-\frac{6}{5}e}^2 } \Bigg) - \Bigg(\dfrac{\dbinom{\,\,\,\,\,\frac{18}{25}e }{{- \frac{66}{25}}e} \dbinom{\,\, 0}{-\frac{6}{5}e} } {{\dbinom{\,\, 0}{-\frac{6}{5}e}}^2}- 1\Bigg)^2     \, \, } \,\, \cdot {\dbinom{\frac{6}{5}e}{\frac{46}{25}e}}$$

<p></p> 




$$\boldsymbol{r}_{PT_2} =  \dfrac{-\dfrac{9}{5}}{\dfrac{5}{2} \cdot\dfrac{1}{\,\,e^2}       \cdot            \Bigg(\dfrac{138}{125} \cdot \ e^2 \Bigg) - \Bigg(\dfrac {36}{25}\Bigg)     \, \, } \,\, \cdot {\dbinom{\frac{6}{5}e}{\frac{46}{25}e}}$$

<p></p> 

$$\boldsymbol{r}_{PT_2} = {\dbinom{-\frac{18}{11}e}{-\frac{138}{55}e}}$$

<p></p> 

* Um unseren Ruckpol bestimmen zu können, benötigen zunächst den Vektor $\boldsymbol{r}_{WT_2}$. Dieser wird durch Subtraktion von $\boldsymbol{r}_{PT_2}$ und $\boldsymbol{r}_{PW_2}$ bestimmt (S.171):

<p></p> 

$$\boldsymbol{r}_{WT_2} = \boldsymbol{r}_{PT_2} - \boldsymbol{r}_{PW_2}$$

<p></p> 

$$\boldsymbol{r}_{WT_2} = {\dbinom{-\frac{18}{11}e}{-\frac{138}{55}e}} - {\dbinom{\,\,\,\,\frac{46}{25}e}{- \frac{6}{5}e}}$$

<p></p> 

$$\boldsymbol{r}_{WT_2} = {\dbinom{-\frac{956}{275}e}{-\frac{72}{55}e}}$$

*  Für $\boldsymbol{\tilde r}_{WT_2}$ hätten wir dann: $\boldsymbol{\tilde r}_{WT_2} ={\dbinom{\,\,\, \,\,\frac{72}{55}e}{-\frac{956}{275}e}}$

<p></p> 

* Somit können wir nun unseren Ruckpol ausrechnen:

<p></p> 

$$\boldsymbol{r}_{PJ} = \dfrac{{\boldsymbol{\tilde r}_{WT_2}} \, \boldsymbol r_{PW_2}} {{\boldsymbol r_{WT_2}}^2} \,  {\boldsymbol{\tilde r}_{WT_2}}$$


<p></p> 

$$\boldsymbol{r}_{PJ} = \dfrac{\dbinom{\,\,\, \frac {72}{55}e}{-\frac{956}{275}e} \, \dbinom{\,\,\,\frac {46}{25}e}{-\frac{6}{5}e}} {{\dbinom{-\frac{956}{275}e}{-\frac {72}{55}e}}^2} \, \cdot  \dbinom{\,\,\,\,\frac {72}{55}e}{- \frac {956}{275} e}$$

<p></p> 

$$\boldsymbol{r}_{PJ} = \frac{3016}{6325} \cdot  \dbinom{\,\,\,\,\frac {72}{55}e}{- \frac {956}{275} e}$$

<p></p> 

$$\boldsymbol{r}_{PJ} = \dbinom{\,\,\,\frac {78}{125}e}{- \frac {83}{50} e}$$

* Zu guter Letzt kümmern wir uns um dem Ballschen Punkt. Dieser wird als Vektor $\boldsymbol{r}_{PU}$ berechnet.

* Hierfür benötigen wir den Vektor $\boldsymbol{r}_{WW_2}$, der wie folgt berechnet wird:



$$\boldsymbol{r}_{WW_2} = \boldsymbol{r}_{PW_2} - \boldsymbol{r}_{PW_1}$$

<p></p> 

$$\boldsymbol{r}_{WW_2} = {\dbinom{\,\,\, \frac{46}{25}e}{-\frac{6}{5}e}} - {\dbinom{\,\,\,\,\frac{18}{25}e}{- \frac{66}{25}e}}$$

<p></p> 

$$\boldsymbol{r}_{WW_2} = {\dbinom{\frac{28}{25}e}{\frac{36}{25}e}}$$

*  Für $\boldsymbol{\tilde r}_{WW_2}$ hätten wir dann: $\boldsymbol{\tilde r}_{WW_2} ={\dbinom{-\frac{36}{25}e}{ \,\,\,\, \frac{28}{25}e}}$


* Somit ist unser Ballscher Punkt:

$$\boldsymbol{r}_{PU} = \dfrac{{\boldsymbol{\tilde r}_{WW_2}} \, \boldsymbol r_{PW_1}} {{\boldsymbol r_{WW_2}}^2}  \cdot  {\boldsymbol{\tilde r}_{WW_2}}$$

<p></p> 

$$\boldsymbol{r}_{PU} = \dfrac{\dbinom{-\frac {36}{25}e}{\,\,\,\,\,\frac{28}{25}e} \, \dbinom{\,\,\,\,\,\frac {18}{25}e}{-\frac{66}{25}e}} {{\dbinom{\frac{28}{25}e}{\frac {36}{25}e}}^2} \, \cdot  \dbinom{-\frac {36}{25}e}{\,\,\,\,\,\frac {28}{25} e}$$

<p></p> 

$$\boldsymbol{r}_{PU} = -\frac{6}{5} \cdot  \dbinom{-\frac {36}{25}e}{\,\,\,\,\,\frac {28}{25} e}$$

<p></p> 

$$\boldsymbol{r}_{PU} = \dbinom{\,\,\,\,\frac {216}{125}e}{- \frac {168}{125} e}$$