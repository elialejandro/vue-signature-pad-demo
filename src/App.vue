<template>
  <div id="app">
    <div class="container">
      <div class="container">
        <VueSignaturePad
          id="signature"
          width="100%"
          height="500px"
          ref="signaturePad"
          :options="options"
        />
      </div>
      <div class="buttons">
        <button @click="undo">Undo</button>
        <button @click="save">Save</button>
        <button @click="change">Change Color</button>
        <button @click="resume">Resume Color</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    options: {
      penColor: "#c0f",
    },
  }),
  methods: {
    undo() {
      this.$refs.signaturePad.undoSignature();
    },
    save() {
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature();

      alert("Open DevTools see the save data.");
      console.log(isEmpty);
      console.log(data);
    },
    change() {
      this.options = {
        penColor: "#00f",
      };
    },
    resume() {
      this.options = {
        penColor: "#c0f",
      };
    },
  },
};
</script>

<style>
#signature {
  border: double 3px transparent;
  border-radius: 5px;
  background-image: linear-gradient(white, white),
    radial-gradient(circle at top left, #4bc5e8, #9f6274);
  background-origin: border-box;
  background-clip: content-box, border-box;
}

.container {
  width: "100%";
  padding: 8px 16px;
}

.buttons {
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 8px;
}
</style>
