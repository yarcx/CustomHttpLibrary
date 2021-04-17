class EasyHttp {
    async get(url) {
        const response = await fetch(url)

        const data = await response.json()
        return data
    }

    async Post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        const responseData = await response.json()

        return responseData
    }

    async Put(url, data) {
        const details = await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const responseDetails = await details.json();

        return responseDetails
    }

    async delete(url) {
         await fetch(url, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });

        return "A Post has been deleted"
    }
}