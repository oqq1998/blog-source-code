import blog from '@/api/blog'
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      blogs: [],
      page: 1,
      total: 0
    }
  },

  created() {
    this.page = parseInt(this.$route.query.page) || 1
    blog.getBlogsByUserId(this.user.id, { page: this.page })
      .then(res => {
        console.log(res)
        this.page = res.page
        this.total = res.total
        this.blogs = res.data     })
  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    onPageChange(newPage) {
      blog.getBlogsByUserId(this.user.id, { page: newPage }).then(res => {
        console.log(res)
        this.blogs = res.data
        this.total = res.total
        this.page = res.page
        this.$router.push({ path:"/my", query: { page: newPage } })
      })
    },
    onDelete(blogId) {
      this.$confirm("是否删除此博客？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type:"warning"
      }).then(() => {
        return blog.deleteBlog({ blogId })
      }).then(() => {
          this.$message.success("删除成功")
      }).then(() => {
        this.blogs=this.blogs.filter(blog=>blog.id!=blogId)
      })
    },
    splitDate(dataStr) {
      let dateObj = typeof dataStr === 'object' ? dataStr : new Date(dataStr)
      return {
        date: dateObj.getDate(),
        month: dateObj.getMonth() + 1,
        year: dateObj.getFullYear()
      }
    }
  }
}