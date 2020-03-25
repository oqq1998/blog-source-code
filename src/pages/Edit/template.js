import blog from '@/api/blog'

export default {
  data() {
    return {
      blogId:null,
      title: "",
      description: "",
      content: "",
      atIndex: false,
      titleMaxLength: 50,
      descriptionMaxLength: 200,
    }
  },

  created() {
    this.blogId = this.$route.params.blogId
    blog.getDetail({ blogId: this.blogId }).then(res => {
      this.title = res.data.title
      this.description = res.data.description
      this.content = res.data.content
      this.atIndex = res.data.atIndex
    })
  }, 
  methods: {
    onEdit() {
      blog.updateBlog({ blogId: this.blogId }, { title: this.title, content: this.content, description: this.description, atIndex: this.atIndex })
        .then(res => {
          this.$message.success(res.msg)
          this.$router.push({ path: `/detail/${res.data.id}` })
        })
    }
  },
  watch: {
    title() {
      if (this.title.length > this.titleMaxLength) {
        this.title = String(this.title).slice(0, this.titleMaxLength);
      }
    },
    description() {
      if (this.description.length > this.descriptionMaxLength) {
        this.description = String(this.description).slice(0, this.descriptionMaxLength);
      }
    }
  }
}