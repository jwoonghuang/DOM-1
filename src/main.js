const div = dom.create("<tr><td></td></tr>");
console.log(div);
dom.before(next , div)
const div3 = dom.create('<div id ="PEOPLE"></div>')
dom.wrap(div , div3)
const node = dom.empty(window.number)
console.log(node)

dom.attr(number , 'title' , 'like this')
const title = dom.attr(number , "title")
console.log(`title: ${title}`)

dom.text(ord , 'so,i wanna go to home')

dom.style(ord , {border : '1px solid red' ,color :'blue'})
console.log(dom.style(ord,'border'))
dom.style(ord , 'color' , "green")

dom.class.add(number , 'orange')
dom.class.remove(ord , "blue")
dom.class.has(ord , 'blue')

const fn = ()=>{console.log("点了")}
dom.on(ord , "click" , fn)
dom.off(ord , "click" ,fn)

const ordDiv = dom.find('#AAL')[0]
console.log(ordDiv)
console.log(dom.find(".tk") , ordDiv[0])

console.log(dom.parent(O4))

console.log(dom.siblings(dom.find('#s3')[0]))


console.log(dom.next(dom.find('#O4')[0]))
console.log(dom.previous(dom.find('#O4')[0]))

const t = dom.find('#travel')[0]
dom.each(dom.children(t) , (n)=> dom.style(n , 'color' , 'red'))

console.log(dom.index(s3))