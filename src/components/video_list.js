import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    // lấy thuộc tính videos duyệt trong mảng và gán vào videoListItem
    const videoItems = props.videos.map((video) => { 
        // trả về videoListItem với thuộc tính video, do các dữ liệu giống nhau nên cần phân biệt nên ta tại thêm props là key
        return (
            <VideoListItem 
                onVideoSelect={props.onVideoSelect}
                key={video.etag} 
                video={video} 
            />
        );
    });
    return (
        // do class trung với từ khóa nên muốn thêm class vào ta phải sử dụng className
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
}

export default VideoList;