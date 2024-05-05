export default defineNuxtRouteMiddleware((from, to) => {
  const user = useSupabaseUser();

  if (!user.value && to.fullPath == "/checkout") {
      console.log('test')
    return navigateTo("/auth");
  }
});
