class Cloudinary {
  constructor() {
    this.url = "https://api.cloudinary.com/v1_1/dcljapgr4/image/upload";
    this.key = process.env.REACT_APP_CLOUDINARY_API_KEY;
    this.uploadPreset = "djcxqigc";
  }

  async uploadImage(file) {
    const formData = new FormData();

    formData.append("api_key", this.key);
    formData.append("upload_preset", this.uploadPreset);
    formData.append("timestamp", (Date.now() / 1000) | 0);
    formData.append("file", file);

    const result = await fetch(this.url, {
      method: "POST",
      body: formData,
    });
    const text = await result.json();

    return text.url;
  }
}

export default new Cloudinary();
