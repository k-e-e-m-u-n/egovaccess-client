class APIRequest {
    constructor() {
        this.admin = "EGovAccess";
    }
    async getHomePosts() {
        const response = await fetch("https://egov-access.onrender.com/egov/admin/"),
        data = await response.json();

        return data;
    }
}

export default APIRequest;