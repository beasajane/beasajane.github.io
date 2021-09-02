
          let nameInput = document.querySelector('.name')
          let messageInput = document.querySelector('.message')

          let messagesDiv = document.querySelector('#messagesDiv')

          function liuyan() {// 获取表单数据，发请求
            event.preventDefault() // 防止提交表单，重新刷新页面
            let name = nameInput.value
            let message = messageInput.value

            let xhr = new XMLHttpRequest()
            xhr.open('POST', '/liuyan')
            xhr.onload = function() {
              name = message = ''
              // let div = document.createElement('div')
              // div.textContent = name + ' - ' + message
              // document.body.append(div)
              init() // 重新获取最新留言并展示
            }
            xhr.send('name=' + name + '&message=' + message)
          }

          function init() { // 封装 ，将请求到的留言显示在页面的一个div中上
            messagesDiv.textContent = ''   // 清空#messages的 div
            
            let xhr = new XMLHttpRequest() 
            xhr.open('get', '/messages')
            
            xhr.onload = function(e) {
              let messages = JSON.parse(xhr.responseText)
              for(let i = messages.length - 1; i >= 0; i--) {
                let msg = messages[i]
                let div = document.createElement('div')
                div.textContent = msg.name + ' - ' + msg.message
                messagesDiv.append(div)
              }
            }
            xhr.send()
          }
          init()