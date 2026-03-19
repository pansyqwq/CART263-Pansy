window.onload = goFetch;
  async function goFetch(){ //async function allows multiple function running on the same time
  try {//try what ever is in here
        let response = await fetch('https://my-horrible-webservice.com/data.json'); //if we use fetch, it will return error if it doesn't run
        let data = await response.json(); 
  }
  catch(err) { //catch the error
      console.log(err)
  }
}