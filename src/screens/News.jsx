import React from 'react'

import NavBar from "../components/NabBar";
import { Filter } from '../components/Filter';
import { NewsCard } from '../components/NewsCard';
import {Popup} from './creat';

const news = [
    {
        mainPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3SFeP3rQRWYoR1VtR9L8-DwSM3wvPq4CR1g&usqp=CAU",
        newsTitle: "The Crosby Estates At Rancho Sante Fe",
        newsContent: "Vonsectetur adipiscing elit. Duis ut ex mi. Morbi erat felis, elementum eget odio venenatis, pretium congue ex. Nullam mauris mi, blandit vitae ante commodo, dignissim vestibulum dolor. Ut id metus vel lorem varius porttitor. Aliquam urna dolor, dapibus at tempus at, euismod quis diam. Aenean non lacus arcu. Nam ligula […]"
    },
    {
        mainPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3TgNuht9dOo6kdsj1PoUBfOuC4ErUCjASsg&usqp=CAU",
        newsTitle: "New  Development: The Crosby Estates At Rancho Sante Fe",
        newsContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ex mi. Morbi erat felis, elementum eget odio venenatis, pretium congue ex. Nullam mauris mi, blandit vitae ante commodo, dignissim vestibulum dolor. Ut id metus vel lorem varius porttitor. Aliquam urna dolor, dapibus at tempus at, euismod quis diam. Aenean non lacus arcu. Nam ligula […]"
    },
    {
        mainPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR--Q8fxuAp1_J52sXMoUdawutALxHBLqP3Rw&usqp=CAU",
        newsTitle: "The Crosby Estates At Rancho Sante Fe",
        newsContent: "Vonsectetur adipiscing elit. Duis ut ex mi. Morbi erat felis, elementum eget odio venenatis, pretium congue ex. Nullam mauris mi, blandit vitae ante commodo, dignissim vestibulum dolor. Ut id metus vel lorem varius porttitor. Aliquam urna dolor, dapibus at tempus at, euismod quis diam. Aenean non lacus arcu. Nam ligula […]"
    },
    {
        mainPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-5ShXTlzrjwuNhhGk2BAT2iHkuZ5nxb3U8xx6d_BcgDM5wuRH9eff7t20IoLQNml3Uhg&usqp=CAU",
        newsTitle: "New  Development: The Crosby Estates At Rancho Sante Fe",
        newsContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ex mi. Morbi erat felis, elementum eget odio venenatis, pretium congue ex. Nullam mauris mi, blandit vitae ante commodo, dignissim vestibulum dolor. Ut id metus vel lorem varius porttitor. Aliquam urna dolor, dapibus at tempus at, euismod quis diam. Aenean non lacus arcu. Nam ligula […]"
    },
    {
        mainPhoto: "https://4kwallpapers.com/images/wallpapers/audi-r8-coupe-v10-gt-rwd-audi-r8-2022-2732x2732-8814.jpg",
        newsTitle: "The Crosby Estates At Rancho Sante Fe",
        newsContent: "Vonsectetur adipiscing elit. Duis ut ex mi. Morbi erat felis, elementum eget odio venenatis, pretium congue ex. Nullam mauris mi, blandit vitae ante commodo, dignissim vestibulum dolor. Ut id metus vel lorem varius porttitor. Aliquam urna dolor, dapibus at tempus at, euismod quis diam. Aenean non lacus arcu. Nam ligula […]"
    },
    {
        mainPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR--Q8fxuAp1_J52sXMoUdawutALxHBLqP3Rw&usqp=CAU",
        newsTitle: "New  Development: The Crosby Estates At Rancho Sante Fe",
        newsContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ex mi. Morbi erat felis, elementum eget odio venenatis, pretium congue ex. Nullam mauris mi, blandit vitae ante commodo, dignissim vestibulum dolor. Ut id metus vel lorem varius porttitor. Aliquam urna dolor, dapibus at tempus at, euismod quis diam. Aenean non lacus arcu. Nam ligula […]"
    }
];


export const News = () => {
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
                    {news.map((item, index) => {
                        return (
                            <NewsCard
                                mainPhoto={item.mainPhoto}
                                newsTitle={item.newsTitle}
                                newsContent={item.newsContent}
                            />
                        )
                    }  )}
                </div>
                </div>

            </div>
            );
}