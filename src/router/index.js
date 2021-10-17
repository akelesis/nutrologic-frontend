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
    component: () => import(/* webpackChunkName: "about" */ '../views/PatientLogin.vue')
  },
  {
    path: '/patientRegister',
    name: 'PatientRegister',
    component: () => import(/* webpackChunkName: "about" */ '../views/PatientRegister.vue')
  },
  {
    path: '/patientDashboard',
    name: 'PatientDashboard',
    component: () => import(/* webpackChunkName: "about" */ '../views/PatientDashboard.vue')
  },
  {
    path: '/patient/evaluationHistory',
    name: 'EvaluationHistory',
    component: () => import(/* webpackChunkName: "about" */ '../views/EvaluationHistory.vue')
  },
  {
    path: '/patient/evaluationResult',
    name: 'PatientEvaluationResult',
    component: () => import(/* webpackChunkName: "about" */ '../views/PatientEvaluationResult.vue')
  },
  {
    path: '/patient/evaluation/weight',
    name: 'PatientEvaluationWeight',
    component: () => import(/* webpackChunkName: "about" */ '../views/PatientEvaluation/Weight.vue')
  },
  {
    path: '/patient/evaluation/foodIngestion',
    name: 'PatientEvaluationFoodIngestion',
    component: () => import(/* webpackChunkName: "about" */ '../views/PatientEvaluation/FoodIngestion.vue')
  },
  {
    path: '/nutritionistLogin',
    name: 'NutritionistLogin',
    component: () => import(/* webpackChunkName: "about" */ '../views/NutritionistLogin.vue')
  },
  {
    path: '/nutritionistDashboard',
    name: 'NutritionistDashboard',
    component: () => import(/* webpackChunkName: "about" */ '../views/NutritionistDashboard.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
