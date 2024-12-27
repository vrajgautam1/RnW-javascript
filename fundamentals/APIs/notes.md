how  to vall api?

js provides us some methods

api calling methods, api testing methods
set api data on the front end

when u enter incorrect url. it will throw error. to handle that error we must set how to display it on ui



we can also do it dynamically using string notation in url

apitestinng tool postman, swagger


----------------------------------------

dog api

---------------------------------------

for getting random dog image we can use this code

<div id="imgContainer">
        <img src="" alt="" id="firstImg">
    </div>
    

    <script>
        let firstImg = document.getElementById("firstImg")
        let imgContainer = document.getElementById("imgContainer")
        const data = () => {
            let endPoint = "users"
            // let userID = n
            fetch(`https://dog.ceo/api/breeds/image/random`).then((res) => {
                    return res.json()
                }).then((result)=>{
                    console.log(result.message)
                    let imgUrl = result.message

                    imgContainer.innerHTML = `<img src="${imgUrl}" alt="" id="firstImg height="200">`

                }).catch((error) => {
                console.log(error) 
            })
        }

        data()