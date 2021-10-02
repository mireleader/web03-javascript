    
    var Links = {
        setColor:function(color) {
            // JQuery를 이용해 <a>태그의 모든 색상이 변경되도록 코드 변경
            var alist = document.querySelectorAll('a');
            var i = 0;
            while (i < alist.length) {
                alist[i].style.color = color;
                i = i + 1;            
            }
        }
    }

    var Body = {
        setColor:function (color){
            // JQuery를 이용해 <body>태그의 색상이 변경되도록 코드 변경;
            document.querySelector('body').style.color=color;
        },

        setBackgroundColor:function (color) {
            // JQuery를 이용해 <body>태그의 배경색이 변경되도록 코드 변경;
            document.querySelector('body').style.backgroundColor=color;
        }
    }

    function nightDayHandler(self) {
        if(self.value==='night') {
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value='day';
        Links.setColor('powderblue');
        }
        else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value='night';
        Links.setColor('blue');
        }
    }