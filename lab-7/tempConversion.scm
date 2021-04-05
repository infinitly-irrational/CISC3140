;Functions to convert fahrenheit to celcius and vice versa

;F -> C
(define FtoC(lambda (f)
  (* (/ 5 9) (- f 32))
))

;C -> F

(define CtoF(lambda (c)
  (+ (* (/ 9 5) c) 32)
))

(display (FtoC 98.6))(newline)
(display (CtoF 36.6))

