function openNav() {
    document.getElementById("myTopnav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myTopnav").style.width = "0";
  }


  const div = document.querySelector('#calculate');
  const url = 'https://bitbucket.org/hpstore/spacex-cargo-planner/raw/204125d74487b1423bbf0453f4dcb53a2161353b/shipments.json';
  const usersData = []
  const loader = document.getElementById('loading')
  const box = document.getElementById('boxes')
  const mail = document.getElementById('mail')
  const ul = document.getElementById('ull')
  const h2 = document.getElementById('header2')
  const output = document.getElementById('output')
  let maxWidth = screen.width;
  function fetchData(){
        loader.style.display = "block";
        fetch(url)
        .then((response)=>response.json())
        .then(data=>{
            usersData.push(...data)
            loader.style.display = "none";

        })
        .catch(err => console.log(err))
    }
    fetchData()

    window.addEventListener('load',()=>{
        fetchData()
    })
    function displayList(data){
        ul.addEventListener('click',(e)=>{
          if(maxWidth <=600){
            closeNav()
          }else{document.getElementById("myTopnav").style.width = 200}
            let li = e.target;
            let findCompany = data.find((cmpn)=>cmpn.name == e.target.innerText )
            if(findCompany){
                let name = document.createTextNode(findCompany.name);
                let email = document.createTextNode(findCompany.email);
                if(e.target.innerText == h2.innerText){
                  h2.innerHTML = '';
                  mail.innerHTML = '';
                  box.value = '' ;
                  output.innerHTML = '';
                }else{
                  h2.innerHTML = '';
                  mail.innerHTML = '';
                  box.value = '';
                  output.innerHTML = '';
                  h2.appendChild(name);
                  mail.appendChild(email);
                  box.value = findCompany.boxes}
                  box.value.split(',')
                  let result = box.value.split(',')
                  let cargos = 10;
                  let count = 0 ;
                  for(i=0;i<result.length;i++){
                    count += parseFloat(result[i])
                   
                  }
                  let countCargos = Math.ceil(count/cargos)
                  output.innerHTML = countCargos
                  console.log(count + 'KG')
                  
            }
        })
    }
    displayList(usersData)

    function changeOuput(){
      box.value.split(',')
                  let result = box.value.split(',')
                  let cargos = 10;
                  let count = 0 ;
                  for(i=0;i<result.length;i++){
                    count += parseFloat(result[i])
                   
                  }
                  let countCargos = Math.ceil(count/cargos)
                  output.innerHTML = countCargos
    }