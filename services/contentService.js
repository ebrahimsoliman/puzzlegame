import http from "../http/http-common";


class ContentService {
    home() {
        return http.get(`cards?populate=*&sort[0]=id%3Adesc`)
    }

    update(
        data,
        id
    ) {
        return http.put(`cards/${id}`,
            {data})
    }

    answer(
        data,
        id
    ) {
        return http.put(`employees/${id}`,
            {data})
    }

    question(
        id
    ) {
        return http.get(`employees/${id}`)
    }
}

export default new ContentService();
