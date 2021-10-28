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
    path: '/patientDashboard',
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
    path: '/nutritionistDashboard',
    name: 'NutritionistDashboard',
    component: () => import('../views/NutritionistDashboard.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
