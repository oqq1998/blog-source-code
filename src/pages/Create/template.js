import blog from '@/api/blog'

export default {
  data() {
    return {
      title: "",
      description: "",
      content: "",
      titleMaxLength: 50,
      descriptionMaxLength: 200,
    }
  },
  methods: {
    onCreate() {   
      blog.createBlog({ title: this.title, content: this.content, description: this.description })
        .then(res => {
          this.$message.success(res.msg)
          this.$router.push({ path: `/detail/${res.data.id}`})
      })
    }
  },
  watch: {
    title() {
      if (this.title.length > this.titleMaxLength) {
        this.title = String(this.title).slice(0, this.titleMaxLength);
      }
    },
    description(){
      if (this.description.length > this.descriptionMaxLength) {
        this.description = String(this.description).slice(0, this.descriptionMaxLength);
      }
    }
  }
}

