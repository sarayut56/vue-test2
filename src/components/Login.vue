<template>
  <div class="container col-md-3" style="min-height: 467px">
    <img
      id="profile-img"
      class="rounded mx-auto d-block mb-3"
      src="../assets/sos.png"
    />
    <h1 class="h2 mb-4 fw-normal text-center font-monospace fw-bold">
      เข้าสู่ระบบ
    </h1>

    <!-- Email input -->
    <div class="form-outline mb-2">
      <input
        type="Username"
        v-model="username"
        class="form-control"
        id="floatingInput"
        placeholder="Username"
      />
      <label for="floatingInput"></label>
    </div>

    <!-- Password input -->
    <div class="form-outline mb-2">
      <input
        type="password"
        v-model="password"
        class="form-control"
        id="floatingPassword"
        placeholder="Password"
      />
      <label for="floatingPassword"></label>
    </div>

    <!-- Submit button -->
    <div class="row">
      <div class="d-grid gap-2 col-5 mx-auto">
        <button @click="login" class="btn btn-outline-info mb-4">
          เข้าสู่ระบบ
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: "HelloWorld",

  components: {},
  data() {
    return {
      username: "",
      password: "",
    };
  },
  mounted() {
    //     // Basic alert
    // this.$noty.show("Hello world!");
    // // Success notification
    // this.$noty.success("Your profile has been saved!");
    // // Error message
    // this.$noty.error("Oops, something went wrong!");
    // // Warning
    // this.$noty.warning("Please review your information.");
    // // Basic alert
    // this.$noty.info("New version of the app is available!");
  },
  methods: {
    login() {
      if (!this.username || !this.password) {
        this.$noty.warning("กรุณากรอกข้อมูลเพื่อเข้าสู่ระบบ");
      } else {
        this.$axios
          .post(
            "/crLogin/auth",
            {
              username: this.username,
              password: this.password,
              secretkey: this.$root.$children[0].dePwd(
                process.env.VUE_APP_API_SECRET_KEY
              ),
            },
            {
              headers: { "Content-Type": "application/json; charset=utf-8" },
            }
          )
          .then((e) => {
            // console.log(e.data);
            // console.log(this.$root.$children[0]);
            // this.$session.set("XXX", value);
            this.$cookies.set("TOKEN", this.$root.$children[0].hashToken(e.data.token));
            // this.$cookies.set("TOKEN", e.data.token);
            this.$router.push("/search")
          })
          .catch((err) => {
            //  userไม่ถูก
            // console.log(err);
            // console.log("Can't get this api,", err);
            if (err.code == "ERR_BAD_REQUEST") {
              this.$noty.error("ชื่อผู้ใช่หรือรหัสผ่านไม่ถูกต้อง");
            }
          });
      }
    },
  },
};
</script>
