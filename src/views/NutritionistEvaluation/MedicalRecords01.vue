<template>
  <div class="MedicalRecords">
    <div class="medical-records-container">
      <h1>Prontuário</h1>
      <default-input inputType="text" placeholder="Teste"/>
      <default-text-area rows="4" placeholder="Testando!"/>
      <nutritionist-radius value="teste!" id="teste" name="teste" />
      <nutritionist-radius value="teste!" id="teste1" name="teste" />
      <DefaultCheckbox id="abc" name="abc" value="abc"/>
    </div>
  </div>
</template>

<script>
import DefaultInput from '../../components/DefaultInput.vue'
import DefaultTextArea from '../../components/DefaultTextArea.vue'
import NutritionistRadius from '../../components/NutritionistRadius.vue'
import DefaultCheckbox from '../../components/DefaultCheckbox.vue'

export default {
  components: {
    DefaultInput,
    DefaultTextArea,
    NutritionistRadius,
    DefaultCheckbox
  }
}
</script>

<style>

.MedicalRecords {
  display: flex;
  justify-content: center;
}

.medical-records-container {
  display: flex;
  flex-direction: column;
  min-width: 60vw;
}

</style>
