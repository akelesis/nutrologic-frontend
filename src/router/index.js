import Vue from 'vue'
import VueRouter from 'vue-router'
import Selection from '../views/Selection.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Selection',
    component: Selection
  },
  {
    path: '/patientLogin',
    name: 'PatientLogin',
    component: () => import('../views/PatientLogin.vue')
  },
  {
    path: '/patientRegister',
    name: 'PatientRegister',
    component: () => import('../views/PatientRegister.vue')
  },
  {
    path: '/patient/dashboard',
    name: 'PatientDashboard',
    component: () => import('../views/PatientDashboard.vue')
  },
  {
    path: '/patient/evaluationHistory',
    name: 'EvaluationHistory',
    component: () => import('../views/EvaluationHistory.vue')
  },
  {
    path: '/patient/evaluationResult',
    name: 'PatientEvaluationResult',
    component: () => import('../views/PatientEvaluationResult.vue')
  },
  {
    path: '/patient/evaluation/weight',
    name: 'PatientEvaluationWeight',
    component: () => import('../views/PatientEvaluation/Weight.vue')
  },
  {
    path: '/patient/evaluation/foodIngestion',
    name: 'PatientEvaluationFoodIngestion',
    component: () => import('../views/PatientEvaluation/FoodIngestion.vue')
  },
  {
    path: '/patient/evaluation/symptoms',
    name: 'PatientEvaluationSymptoms',
    component: () => import('../views/PatientEvaluation/Symptoms.vue')
  },
  {
    path: '/patient/evaluation/activities',
    name: 'PatientEvaluationActivities',
    component: () => import('../views/PatientEvaluation/Activities.vue')
  },
  {
    path: '/nutritionistLogin',
    name: 'NutritionistLogin',
    component: () => import('../views/NutritionistLogin.vue')
  },
  {
    path: '/nutritionist/dashboard',
    name: 'NutritionistDashboard',
    component: () => import('../views/NutritionistDashboard.vue')
  },
  {
    path: '/nutritionist/patientsEvaluations',
    name: 'PatientsEvaluations',
    component: () => import('../views/PatientsEvaluations.vue')
  },
  {
    path: '/nutritionist/searchPatients',
    name: 'searchPatients',
    component: () => import('../views/SearchPatients.vue')
  },
  {
    path: '/nutritionist/patientAutoEvalReport',
    name: 'patientAutoEvalReport',
    component: () => import('../views/PatientAutoEvalReport.vue')
  },
  {
    path: '/nutritionist/evaluation/medicalRecords01',
    name: 'medicalRecords01',
    component: () => import('../views/NutritionistEvaluation/MedicalRecords01.vue')
  },
  {
    path: '/nutritionist/evaluation/medicalRecords02',
    name: 'medicalRecords02',
    component: () => import('../views/NutritionistEvaluation/MedicalRecords02.vue')
  },
  {
    path: '/nutritionist/evaluation/medicalRecords03',
    name: 'medicalRecords03',
    component: () => import('../views/NutritionistEvaluation/MedicalRecords03.vue')
  },
  {
    path: '/nutritionist/evaluation/medicalRecords04',
    name: 'medicalRecords04',
    component: () => import('../views/NutritionistEvaluation/MedicalRecords04.vue')
  },
  {
    path: '/nutritionist/evaluation/medicalRecords11',
    name: 'medicalRecords11',
    component: () => import('../views/NutritionistEvaluation/MedicalRecords11.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
