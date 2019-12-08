(defn day8-part1 [width height pixels]
  (let [layer (->> pixels
                   seq
                   (partition (* height width))
                   (map frequencies)
                   (apply min-key #(get % \0)))]
    (* (get layer \2) (get layer \1))))
	
(defn day8_part2 [width height]
  (let [input (slurp "resources/day9input.txt")]
    (->> input
         seq
         (partition (* width height))
         (apply interleave)
         (partition (quot (.length input) (* width height)))
         (map (fn [v] (first (drop-while #(= \2 %) v))))
         (partition width)
         (map #(clojure.string/join "," %))
         (clojure.string/join "\n")
         )))
	   
(def day8-part1-answer (day8-part1 25 6 (slurp "resources/day9input.txt")))
(def day8-part2-answer (day8-part2 25 6 (slurp "resources/day9input.txt")))