const api = {
    getUsers(searchedUsers,page=1){
     return fetch(`https://api.github.com/search/users?q=${searchedUsers}+in&per_page=9&page=${page}`)
       .then(res => {
            return res.json()
        })
    },
    getRepos(searchedRepos,page){
        return fetch(`https://api.github.com/search/repositories?q=${searchedRepos}+in&per_page=6&page=${page}`)
          .then(res => {
            return res.json()
          })
    },
    getSingleUserApi(id=83531935){
      return fetch(`https://api.github.com/search/users? id=${id}`)
       .then(res => {
            return res.json() 
        })   
    }
}

export default api


