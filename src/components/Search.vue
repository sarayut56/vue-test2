<template>
  <div class="container col-md-5" style="min-height: 467px">
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
    />
    <img
      id="profile-img"
      class="rounded mx-auto d-block mb-3"
      src="../assets/sos.png"
    />
    <h1 class="h2 mb-3 fw-normal text-center font-monospace fw-bold">
      ค้นหาคอมพิวเตอร์
    </h1>

    <div class="input-group mb-5">
      <input
        v-model="q"
        type="search"
        class="form-control rounded"
        placeholder="Search ชื่อคอมพิวเตอร์ เช่น C66100001"
        aria-label="Search"
        aria-describedby="search-addon"
      />
      <button @click="search" type="button" class="btn btn-outline-primary">
        <i class="bi bi-search" style="font-size: 25px"></i> search
      </button>
    </div>
    <div class="row">
      <a class="btn btn-outline-success" href="/com" role="button"
        >เพิ่มข้อมูลใหม่</a
      >
    </div>
    <label for="input-datalist"></label>

    <label for="input-datalist"></label>

    <div class="row">
      <table class="table table-bordered">
        <thead>
          <tr class="text-center">
            <th scope="col">ลำดับ</th>
            <th scope="col">ชื่อคอมพิวเตอร์</th>
            <th scope="col">แอ็คชัน</th>
          </tr>
        </thead>
        <tbody class="text-center">
          <tr v-for="list in lists" :key="list.com_id">
            <th scope="row">1</th>
            <td>{{ list.com_no }}</td>
            <td>
              <button
                @click="updatecom(list.com_id)"
                class="btn btn-outline-success"
              >
                เลือก
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <label for="input-datalist"></label>
    <!-- data-bs-toggle="modal"
          data-bs-target="#exampleModal4" -->
    <div class="d-grid gap-2 col-12 mx-auto">
      <button type="submit" class="btn btn-outline-danger" @click="logout('/')">
        ออกจากระบบ
      </button>
      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal4"
        tabindex=""
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h2 class="modal-title" id="exampleModalLabel">แจ้งเตือน</h2>
            </div>
            <div class="modal-body"></div>
            <div class="modal-footer">
              <div class="d-grid gap-2 col-4 mx-auto">
                <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> -->
                <a class="btn btn-outline-danger" href="/" role="button">ปิด</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InFormaTion",
  data() {
    return {
      q: "",
      lists: null,
    };
  },
  mounted() {
    //this.$session.start()
    console.log("kkkk ", this.$cookies.get("TOKEN"));
  },
  methods: {
    logout(redirect) {
      this.$cookies.remove("TOKEN");
      this.$router.push(redirect);
    },
    updatecom(com_id) {
      this.$router.push("/com/" + com_id);
    },
    search() {
      if (!this.q) {
        this.$noty.error("กรุณาใส่คำค้นหา");
      } else if (this.q.length < 9 || this.q.length > 9) {
        this.$noty.error("กรุณาพิมพ์ให้ครบ9หลักเท่านั้น");
      } else {
        this.$axios
          .get(
            "/crProductSurveyByKeyword?keyword=" + this.q,

            {
              headers: {
                Authorization: `Bearer ${this.$root.$children[0].deToken(
                  this.$cookies.get("TOKEN")
                )}`,
                // Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
                // eyJ1c2VyTmFtZSI6ImNvbXAiLCJpc3MiOiJyZWguZ28udGgi
                // LCJpYXQiOjE3MDAxOTM3MDIsImV4cCI6MTcwMDc5ODUwMn0.
                // wX0uSPoH4VKS1mZlKNlm-jJY8TAFPBaZaycyUkFiFYY`,
              },
            }
          )
          .then((e) => {
            console.log(e.data);
            // this.$session.set("XXX", value);
            this.lists = e.data.result;
          })
          .catch((err) => {
            //  userไม่ถูก
            // console.log(err);
            // console.log("Can't get this api,", err);
            if (err.code == "ERR_BAD_REQUEST") {
              this.$noty.error("คุณไม่มีสิทธ์ในการค้นหาข้อมูล");
            }
          });
      }
    },
  },
};
</script>

<!-- <style>
  body {
    background: rgb(187, 187, 230), rgb(77, 121, 96);
  }
  </style> -->
