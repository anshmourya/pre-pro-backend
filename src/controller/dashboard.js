const youtube = require('../config/youtube');
const User = require('../models/user');

// @desc Get videos
// @route GET /api/videos
//with pagination

const mockYoutubeResponse = {
    "kind": "youtube#searchListResponse",
    "etag": "QCb82jviYztiVOLt8ymkjiTvTY4",
    "nextPageToken": "CAoQAA",
    "regionCode": "IN",
    "pageInfo": {
        "totalResults": 52687,
        "resultsPerPage": 10
    },
    "items": [
        {
            "kind": "youtube#searchResult",
            "etag": "zG3T-KmV2o97IgwkWz5GVaBlga4",
            "id": {
                "kind": "youtube#video",
                "videoId": "TlHvYWVUZyc"
            },
            "snippet": {
                "publishedAt": "2023-01-11T16:41:34Z",
                "channelId": "UCZgt6AzoyjslHTC9dz0UoTw",
                "title": "Kubernetes Explained in 6 Minutes | k8s Architecture",
                "description": "To get better at system design, subscribe to our weekly newsletter: https://bit.ly/3tfAlYD Checkout our bestselling System Design ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/TlHvYWVUZyc/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/TlHvYWVUZyc/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/TlHvYWVUZyc/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "ByteByteGo",
                "liveBroadcastContent": "none",
                "publishTime": "2023-01-11T16:41:34Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "C9t0voyuAAQdP6fCGhngJxFjwnQ",
            "id": {
                "kind": "youtube#video",
                "videoId": "vxJobGtqKVM"
            },
            "snippet": {
                "publishedAt": "2020-12-11T22:08:03Z",
                "channelId": "UCKWaEZ-_VweaEx1j62do_vQ",
                "title": "What is Serverless?",
                "description": "Learn more about Serverless Computing → http://ibm.biz/serverless-computing-guide Check out \"What is FaaS?\" lightboard video ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/vxJobGtqKVM/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/vxJobGtqKVM/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/vxJobGtqKVM/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "IBM Technology",
                "liveBroadcastContent": "none",
                "publishTime": "2020-12-11T22:08:03Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "P8X6a5QOcP8Kgtk5_3SEd0eDGjQ",
            "id": {
                "kind": "youtube#video",
                "videoId": "cw34KMPSt4k"
            },
            "snippet": {
                "publishedAt": "2024-03-15T23:07:45Z",
                "channelId": "UC2Xd-TjJByJyK2w1zNwY0zQ",
                "title": "How I deploy serverless containers for free",
                "description": "Build a Python Flask app for removing the background from images, containerize it with Docker, then deploy it with serverless ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/cw34KMPSt4k/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/cw34KMPSt4k/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/cw34KMPSt4k/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Beyond Fireship",
                "liveBroadcastContent": "none",
                "publishTime": "2024-03-15T23:07:45Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "eq7k0RbZQMzHMJNsOpER8Tt5IfA",
            "id": {
                "kind": "youtube#video",
                "videoId": "90pVRK49AQM"
            },
            "snippet": {
                "publishedAt": "2022-02-11T13:29:27Z",
                "channelId": "UCJUmE61LxhbhudzUugHL2wQ",
                "title": "Explained : Serverless vs Serverful Backends ⚡",
                "description": "In this video, let's explore the fundamental differences between using serverless and serverful models, how they work, and what ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/90pVRK49AQM/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/90pVRK49AQM/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/90pVRK49AQM/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Mehul - Codedamn",
                "liveBroadcastContent": "none",
                "publishTime": "2022-02-11T13:29:27Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "Q9suN6cJk82Sf6n9YGB9d3i0isM",
            "id": {
                "kind": "youtube#video",
                "videoId": "gF-7cc5T4MM"
            },
            "snippet": {
                "publishedAt": "2021-06-05T15:45:03Z",
                "channelId": "UCBdfli20jrAscmR9COL35qg",
                "title": "How Much Kubernetes Should You Learn?",
                "description": "In this video we will go over which Kubernetes components should you learn for your job interview. Discounted Link for my Udemy ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/gF-7cc5T4MM/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/gF-7cc5T4MM/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/gF-7cc5T4MM/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Cloud With Raj",
                "liveBroadcastContent": "none",
                "publishTime": "2021-06-05T15:45:03Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "SSOmwuKKedps9_O5C2aFnXXslwQ",
            "id": {
                "kind": "youtube#video",
                "videoId": "W_VV2Fx32_Y"
            },
            "snippet": {
                "publishedAt": "2021-03-17T17:46:04Z",
                "channelId": "UCsBjURrPoezykLs9EqgamOA",
                "title": "Serverless Computing in 100 Seconds",
                "description": "Serverless Computing can dramatically simplify your backend infrastructure by eliminating the need to configure, maintain, and ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/W_VV2Fx32_Y/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/W_VV2Fx32_Y/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/W_VV2Fx32_Y/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Fireship",
                "liveBroadcastContent": "none",
                "publishTime": "2021-03-17T17:46:04Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "KUnaJJkeyEMMjTYGicOXppW_2dk",
            "id": {
                "kind": "youtube#video",
                "videoId": "H5sPGruv2yc"
            },
            "snippet": {
                "publishedAt": "2022-10-20T08:16:48Z",
                "channelId": "UCbRP3c757lWg9M-U7TyEkXA",
                "title": "You Don’t Need Kubernetes",
                "description": "Kubernetes is powerful. You might not need it though. Serverless functions are dope. @devagr is gonna kill me for this one.",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/H5sPGruv2yc/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/H5sPGruv2yc/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/H5sPGruv2yc/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Theo - t3․gg",
                "liveBroadcastContent": "none",
                "publishTime": "2022-10-20T08:16:48Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "ZqRevFEtP8HJmckC76UPjNAE1n0",
            "id": {
                "kind": "youtube#video",
                "videoId": "Sxxw3qtb3_g"
            },
            "snippet": {
                "publishedAt": "2021-09-24T14:41:18Z",
                "channelId": "UCsBjURrPoezykLs9EqgamOA",
                "title": "How to OVER Engineer a Website // What is a Tech Stack?",
                "description": "A \"tech stack\" includes all the technologies used to build a complete web or mobile application - like frameworks, cloud services, ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/Sxxw3qtb3_g/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/Sxxw3qtb3_g/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/Sxxw3qtb3_g/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Fireship",
                "liveBroadcastContent": "none",
                "publishTime": "2021-09-24T14:41:18Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "Zp-o9mrgEsfsXoIMZKhrvxx_cq0",
            "id": {
                "kind": "youtube#video",
                "videoId": "AuMeockiuLs"
            },
            "snippet": {
                "publishedAt": "2020-10-15T14:00:02Z",
                "channelId": "UC-8QAzbLcRglXeN_MY9blyw",
                "title": "Serverless Doesn&#39;t Make Sense",
                "description": "Every time I try serverless it doesn't make any sense to me and just feels kinda of meh. links from video: ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/AuMeockiuLs/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/AuMeockiuLs/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/AuMeockiuLs/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Ben Awad",
                "liveBroadcastContent": "none",
                "publishTime": "2020-10-15T14:00:02Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "p8I7uK0mkRWq9qtLUQHBIKo6Ai4",
            "id": {
                "kind": "youtube#video",
                "videoId": "0jSZDKJyr4Y"
            },
            "snippet": {
                "publishedAt": "2022-05-15T17:28:18Z",
                "channelId": "UCYdv08Q3CGAtLuEuEUK6XXg",
                "title": "Devlog: Prerequisites to Building Full-stack Serverless Apps with Vue.js, Lambda, and More!",
                "description": "Serverless is starting to mature enough to build full-stack web applications. As a Cloud engineer, I want to stay shop as cloud ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/0jSZDKJyr4Y/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/0jSZDKJyr4Y/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/0jSZDKJyr4Y/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Joe Terlecki",
                "liveBroadcastContent": "none",
                "publishTime": "2022-05-15T17:28:18Z"
            }
        }
    ]
}
const getVideos = async (req, res) => {
    try {
        const { id: kindeId } = req.user;
        const { limit = 10, pageToken = '' } = req.query;
        const user = await User.findOne({ kindeId }).populate('tags');
        if (!user) {
            return res.notFound({
                message: 'User not found'
            })
        }
        const tags = user.tags.map(tag => tag.name);

        let response;
        if (process.env.ENV !== 'development') {
            response = await youtube.search.list({
                type: ['video'],
                part: ['snippet'],
                q: tags.slice(0, 3).join(' '),
                maxResults: limit,
                order: 'relevance',
                videoDuration: 'medium',
                pageToken: pageToken
            });
        }

        res.success({
            data: process.env.ENV === 'development' ? mockYoutubeResponse : response.data
        })
    } catch (error) {
        if (error.code === 'ERR_QUOTA_EXCEEDED') {
            return res.tooManyRequests({
                message: 'YouTube API quota exceeded'
            });
        }
        res.internalServerError({
            message: error
        })
    }
}

const mockYoutubeVideoDetailsResponse = {
    "kind": "youtube#videoListResponse",
    "etag": "NbrYy828HVTes3yCMTr-Ty8rv0w",
    "items": [
        {
            "kind": "youtube#video",
            "etag": "dTAgtgVz4oyYVAVtk2Cq38WGl-8",
            "id": "TlHvYWVUZyc",
            "snippet": {
                "publishedAt": "2023-01-11T16:41:34Z",
                "channelId": "UCZgt6AzoyjslHTC9dz0UoTw",
                "title": "Kubernetes Explained in 6 Minutes | k8s Architecture",
                "description": "To get better at system design, subscribe to our weekly newsletter: https://bit.ly/3tfAlYD\n\nCheckout our bestselling System Design Interview books: \nVolume 1: https://amzn.to/3Ou7gkd\nVolume 2: https://amzn.to/3HqGozy\n\nABOUT US: \nCovering topics and trends in large-scale system design, from the authors of the best-selling System Design Interview series.",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/TlHvYWVUZyc/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/TlHvYWVUZyc/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/TlHvYWVUZyc/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/TlHvYWVUZyc/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/TlHvYWVUZyc/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "ByteByteGo",
                "categoryId": "22",
                "liveBroadcastContent": "none",
                "localized": {
                    "title": "Kubernetes Explained in 6 Minutes | k8s Architecture",
                    "description": "To get better at system design, subscribe to our weekly newsletter: https://bit.ly/3tfAlYD\n\nCheckout our bestselling System Design Interview books: \nVolume 1: https://amzn.to/3Ou7gkd\nVolume 2: https://amzn.to/3HqGozy\n\nABOUT US: \nCovering topics and trends in large-scale system design, from the authors of the best-selling System Design Interview series."
                },
                "defaultAudioLanguage": "en-US"
            },
            "contentDetails": {
                "duration": "PT6M28S",
                "dimension": "2d",
                "definition": "hd",
                "caption": "true",
                "licensedContent": true,
                "contentRating": {},
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "1149048",
                "likeCount": "24968",
                "favoriteCount": "0",
                "commentCount": "368"
            },
            "player": {
                "embedHtml": "<iframe width=\"480\" height=\"270\" src=\"//www.youtube.com/embed/TlHvYWVUZyc\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>"
            }
        }
    ],
    "pageInfo": {
        "totalResults": 1,
        "resultsPerPage": 1
    }
}


const getVideoDetails = async (req, res) => {
    try {
        const { videoId } = req.query;

        if (!videoId) {
            return res.badRequest({
                message: 'Video ID is required'
            })
        }

        //make api request to youtube if env is not development
        let response;
        if (process.env.ENV !== 'development') {
            response = await youtube.videos.list({
                part: ['snippet', 'contentDetails', 'statistics'],
                id: videoId
            });
        }

        res.success({
            data: process.env.ENV === 'development' ? mockYoutubeVideoDetailsResponse : response.data
        })
    } catch (error) {
        console.log(error);
        if (error.code === 'ERR_QUOTA_EXCEEDED') {
            return res.tooManyRequests({
                message: 'YouTube API quota exceeded'
            });
        }
        res.internalServerError({
            message: error
        })
    }
}



module.exports = {
    getVideos,
    getVideoDetails
}




