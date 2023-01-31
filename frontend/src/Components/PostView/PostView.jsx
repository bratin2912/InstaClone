import { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import MoreIcon from "../../assets/more_icon.jpg";
import heart from "../../assets/heart.png";
import share from "../../assets/share.png";
import "../PostView/postview.css";
const PostView = () => {
    const [data, setData] = useState(null)
    const fetchApi = async () => {
        const res = await fetch("https://insta-bratin.onrender.com/user");
        setData(await res.json());
    }
    useEffect(() => {
        fetchApi();
    }, [])
    if (!data) {
        return (
            <h1>Loading..</h1>
        )
    }
    return (
        <>
            <Navbar />
            <div>
                {data.result.map((ele) => {
                    const date=ele.postedAt.split(" ");
                    console.log(ele.file_name)
                    return (
                        <div id="main_viewPage" key={ele._id}>
                            <div id="name_icon">
                                <h2 id="name_view">{ele.author}</h2>
                                <img src={MoreIcon} alt="MoreIcon" />
                            </div>
                            <p id="location_view">{ele.location}</p>
                            <div id="img_view">
                                <img src={`${ele.url}`} alt="A beautiful scenery" />
                            </div>
                            <div id="like_share">
                                <img src={heart} alt="heart" id="like" />
                                <img src={share} alt="share" id="sharebtn" />
                                <p id='date'>{`${date[0]} ${date[1]} ${date[2]}`}</p>
                            </div>
                            <p id='likeCount'>{ele.likes}</p>
                            <p id="description_view">{ele.description}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default PostView