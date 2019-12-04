val reg = Regex("1+|2+|3+|4+|5+|6+|7+|8+|9+")
val solution = (284639..748759).filter{
    val s = it.toString()
    val a = s.toCharArray()
    reg.findAll(s).any { m -> m.value.length==2 } && a.mapIndexed {i, n -> i==s.length-1 || n <= a[i+1] }.all { it }
}.size
