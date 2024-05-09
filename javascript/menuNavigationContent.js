class MenuNavigationUI {
    constructor() {
        this.mainScreenUI = document.querySelector(".comments");
    }

    displayHomePosts(posts) {
        let obtainedPosts = "";
        
        posts.reverse().forEach(post => {
            obtainedPosts += `
            <div class="top-community">
                <div class="post-wrapper">
                    <div class="head-img">
                        <div class="first-cont">
                            <img src="/IMAGES/EGOVACCESS LOGO WHITE.jpg" alt="${post.postedBy.name}'s Profile Photo" height="30" width="30" class="border-radius-50">
                            <p class="font-size-12">${post.postedBy.name} posted an update <span class="separator-dot">&#183;</span> <span class="timestamp">${post.createdAt}</span></p>
                        </div>
                        <div class="second-cont cursor-p"><span class="menu-dot">&#183;&#183;&#183;</span></div>
                    </div>
                    <div class="comments-para">${post.text}</div>
                    <div class="image" style="display: ${post.img.length > 0 ? "block" : "none"}">
                    <div class="image-wrapper" style="grid-template-columns: ${post.img.length > 1 ? '1fr 1fr' : '1fr' }; grid-template-rows: ${post.img.length < 3 ? '100%' : '50% 50%' }">
                    ${(post.img.map(image => {
                        return (`<div><img src="${image}" class="border-radius-12" /></div>`
                        );
                    })).join("")}
                    </div>
                                </div>
                                <div class="post-control-actions">
                    <div class="post-info center-class"><p><span class="self-like-info">You and </span><span>${post.likes.length}</span> likes this <span class="separator-dot">&#183;</span> <span>${post.comment.length}</span> comments <span class="separator-dot">&#183;</span> <span>${post.views} views</span></p></div>
                    <div class="reactions-section flex justify-content-sb align-items-c">
                        <div class="post-actions flex align-items-c">
                            <img src="/Landing Page/assets/Like.png" alt="like-icon" class="cursor-p"><span>Like</span>
                            <img src="/Landing Page/assets/Vector.png" alt="comment-icon" class="cursoqr-p"><span>Comment</span>
                        </div>
                        <div class="share-actions cursor-p flex align-items-c">
                            <img src="/Landing Page/assets/Share.png" alt="share-icon">
                        </div>
                    </div>
                    </div>
                </div>
            <div class="dynamic-comment-section" style="display: ${post.comment.length > 0 ? "block" : "none"}">
            ${(post.comment.map(comment => {
                return (`<div class="individual-comment flex flex-direction-c">
                    <section class="actual-comment flex justify-content-sb">
                        <section class="comment-info flex">
                            <section class="comment-info-logo">
                                <section>
                                <img src="${comment.name === "eGov Access" ? "/IMAGES/EGOVACCESS LOGO WHITE.jpg" : "/IMAGES/avatar.jpg" }" width="100%" height="100%" style="border-radius: 50%" />
                                </section>
                            </section>
                            <section class="comment-info-particulars">
                                <p><span>${comment.name}</span><span class="separator-dot">&#183;</span><span class="timestamp">${post.createdAt}</span></p>
                                <p>${comment.text}</p>
                                <p class="timestamp">Reply</p>
                            </section>
                        </section>
                        <section class="comment-reaction">
                            <img src="/Landing Page/assets/Like.png" alt="like-icon" class="cursor-p">    
                        </section>    
                    </section>
                    <section class="comment-replies" style="display: ${post.replies.length > 0 ? "block" : "none"}">
                        ${(post.replies.map(reply => {
                            return (`<section class="comment-actual-replies">
                                <section class="actual-comment flex justify-content-sb">
                                <section class="comment-info flex">
                                    <section class="comment-info-logo"></section>
                                    <section class="comment-info-particulars">
                                    <section class="actual-comment flex justify-content-sb">
                                    <section class="comment-info flex">
                                        <section class="comment-info-logo">
                                            <section>
                                            <img src="${reply.name === "eGov Access" ? "/IMAGES/EGOVACCESS LOGO WHITE.jpg" : "/IMAGES/avatar.jpg" }" width="100%" height="100%" style="border-radius: 50%" />
                                            </section>
                                        </section>
                                        <section class="comment-info-particulars">
                                            <p><span>${reply.name}</span><span class="separator-dot">&#183;</span><span class="timestamp">${post.createdAt}</span></p>
                                            <p>${reply.text}</p>
                                            <p class="timestamp">Reply</p>
                                        </section>
                                    </section>   
                                </section>
                                    </section>
                                </section>
                                <section class="comment-reaction">
                                    <img src="/Landing Page/assets/Like.png" alt="like-icon" class="cursor-p">    
                                </section>    
                            </section>  
                            </section>`);
                        })).join("")}
                    </section>
                </div>`
                );
            })).join("")}
            </div>
          </div>
          </div>
            `;
        });

        this.mainScreenUI.innerHTML = obtainedPosts;
    }

    displayNoInternet() {
        this.mainScreenUI.innerHTML = `<h3 class="text-align-c error-section center-class">No Network Connection</h3>`;
    }
};

export default MenuNavigationUI;