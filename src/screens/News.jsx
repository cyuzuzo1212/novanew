import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBar from "../components/NabBar";
import { Filter } from '../components/Filter';
import { NewsCard } from '../components/NewsCard';
import {Popup} from './creat';




export default function News () {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetchData();
    },);

    const fetchData = () =>{
        axios({
            method: "GET",
            url: "https://newsapi.org/v2/everything?q=apple&from=2023-02-20&to=2023-02-20&sortBy=popularity&apiKey=722699dacb994596a55062f3a01df2b9"
           
        })
        .then((response)=>{
            setBlogs(response.data.articles);
        })
        .catch((error)=>{
            console.log(error);
        });
    };
    return (
        <div>
            <Popup/>
            <NavBar />
            <Filter />
            
            <div className="newsBanner">
                <div className="overLay">
                    <div className="newsBannerText">
                        <h1>Our Blog</h1>
                        <p className='text-sm'>The latest real estate news and insights from San Diego, and Beyond.</p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="newsContainer">
                    {blogs.map((item, index) => {
                        return (
                            <NewsCard
                                urlimg={item.urlToImage}
                                title={item.title}
                                description={item.description}
                            />
                        )
                    }  )}
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className='news-page-manager-container'>
                        <div className='news-page-manager'>
                            <div>
                                <button className='one' style={{
                                    backgroundColor:"#151764",
                                    border:"1px solid aliceblue",
                                    color:"white",
                                    boxShadow:"3px 5px 151764",
                                }}>1</button>
                            </div>
                            <div><button>2</button></div>
                        
                        <div>
                            <button>
                                <Link to={"/news/readmore/screens"}>Next Page</Link>{" "}
                                <small></small>
                            </button>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                </div>
              </div>
            </div>
            );
}