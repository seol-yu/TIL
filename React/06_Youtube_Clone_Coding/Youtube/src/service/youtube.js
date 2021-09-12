class Youtube {
    constructor(key) {
        this.key = key;
        this.getRequestOptions = {
          method: "GET",
          redirect: "follow",
        };
    }

    async mostPopular() {
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/videos?key=${this.key}&part=snippet&chart=mostPopular&maxResults=25&=AIzaSyDMQli6ZSdy2-m0driz8Cv0HAYaQpYamRw`,
            this.getRequestOptions
        );
        const result_1 = await response.json();
        return result_1.items;
    }

    async search(query) {
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/search/?key=${this.key}&part=snippet&maxResults=25&q=${query}&type=video&=AIzaSyDMQli6ZSdy2-m0driz8Cv0HAYaQpYamRw`,
            this.getRequestOptions
        );
        const result_1 = await response.json();
        return result_1.items.map((item) => ({ ...item, id: item.id.videoId }));
    }
}

export default Youtube;