import { useState } from "react"


function useFetch( baseUrl:string ) {
const [ isLoading, setLoading ] = useState(false)
const [ errors, setErrors ] = useState('')


    function get<T>( endpoint:string ):Promise<T>{
        setLoading(true)
        return new Promise((resolve, reject) => {
            fetch( baseUrl + endpoint )
            .then(response => response.json())
            .then((data:T) => {
                if(!data){
                    setLoading(false)
                    setErrors("error fetching page try again")
                    reject("error fetching page try again")
                }
                else{
                    resolve(data)
                    setLoading(false)
                }
            })
            .catch(error =>{
                setLoading(false)
                reject(error)
                setErrors(error.message)
            })
        })
    }
    function post<T>( endpoint: string, body:T){
        handleFetch<T>(endpoint, body, 'POST')
    }
    function put<T>( endpoint: string, body:T){
        handleFetch<T>(endpoint, body, 'PUT')
    }
    function dlete<T>( endpoint: string, body:T){
        handleFetch<T>(endpoint, body, 'DELETE')
    }
    
    function handleFetch<T>(endpoint:string, body:T, method:string):Promise<T> {
        setLoading(true)
        return new Promise((resolve, reject) =>{
            fetch( baseUrl + endpoint, {
                method: method, 
                headers: { "Content-Type": "Application/json"},
                 body: JSON.stringify({body: body})})
            .then(response => response.json())
            .then(( data:T) =>{
                if(!data){
                    reject(`Error ${method}ing the page `)
                    setErrors(`Error ${method}ing the page `)
                    setLoading(false)
                }
                else{
                    resolve(data)
                    setLoading(false)
                }
            })
            .catch( error => {
                reject(error)
                setErrors(error.message)
            })
        })
    }
    return { isLoading, errors, get, post, put, dlete}
  
}

export default useFetch
