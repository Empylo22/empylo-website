import HTTPClient from "../http_instance/wrappedInstance";

export default class EmpyloServices {
  static async signUp(data) {
    const response = await HTTPClient.post("/auth/company/signup", data);
    return response.data;
  }

  static async verify(data) {
    const response = await HTTPClient.post("/auth/company/verify", data);
    return response.data;
  }

  static async login(data) {
    const response = await HTTPClient.post(`/auth/company/login`, data);
    // console.log(response);
    return response.data;
  }

  static async forgotPassword(data) {
    const response = await HTTPClient.post(
      `/auth/company/forgot-password`,
      data,
    );
    return response.data;
  }

  static async passwordReset(data) {
    const response = await HTTPClient.post(
      `/auth/company/reset-password`,
      data,
    );
    return response.data;
  }

  static async activateCompany(compId) {
    const response = await HTTPClient.put(`/auth/${compId}/activate-company`);
    return response.data;
  }

  static async deactivateCompany(compId) {
    const response = await HTTPClient.put(`/auth/${compId}/deactivate-company`);
    return response.data;
  }

  static async getCompanyByCompId(compId) {
    const response = await HTTPClient.get(`/auth/${compId}/company`);
    return response.data;
  }

  static async changePassword(userId, data) {
    const response = await HTTPClient.post(
      `/auth/company/change-password/${userId}`,
      // `/auth/company/change-password`,

      data,
    );
    return response.data;
  }

  static async createCircle(compId, data) {
    const response = await HTTPClient.formDataPost(
      `/company/${compId}/create-circle`,
      data,
    );
    return response.data;
  }

  static async getCompanyCircle(compId, data) {
    const response = await HTTPClient.get(
      `/company/${compId}/get-company-circle`,
      data,
    );
    return response.data;
  }

  static async activateCompanyCircle(compId, data) {
    const response = await HTTPClient.post(
      `/company/${compId}/activate/comapny-circle`,
      data,
    );
    return response.data;
  }

  static async deactivateCompanyCircle(compId, data) {
    const response = await HTTPClient.post(
      `/company/${compId}/deactivate/comapny-circle`,
      data,
    );
    return response.data;
  }

  static async deleteCompanyCircle(compId, data) {
    const response = await HTTPClient.delete(
      `/company/${compId}/delete-company-circle`,
      data,
    );
    return response.data;
  }

  static async addMemberCompanyCircle(circleId, data) {
    const response = await HTTPClient.post(
      `/company/${circleId}/addmember-company-circle`,
      data,
    );
    return response.data;
  }

  static async batchUploadMemberCompanyCircle(circleId, data) {
    const response = await HTTPClient.formDataPost(
      `/company/${circleId}/batchupload-member`,
      data,
    );
    return response.data;
  }

  static async getToptalCirclePerMonth(compId, year) {
    const response = await HTTPClient.get(
      `/company/${compId}/total-circles-per-month/${year}`,
      data,
    );
    return response.data;
  }

  static async profileUpdate(userId, data) {
    const response = await HTTPClient.put(`/user/update/${userId}`, data);
    return response.data;
  }
  static async uploadImage(data) {
    const response = await HTTPClient.formDataPost(
      `/user/createUser-Image`,
      data,
    );
    return response.data;
  }

  static async adminLogin(data) {
    const response = await HTTPClient.post(`/empylo-user/admin/login`, data);
    // console.log(response);
    return response.data;
  }

  // static async getAllCountries() {
  //   const response = await HTTPClient.get(`/countries/getAllCountries`);
  //   return response.data;
  // }
  // static async getUserbyId(id) {
  //   const response = await HTTPClient.get(`/user/${id}`);
  //   return response.data;
  // }

  // static async getWorldCountries() {
  //   const response = await HTTPClient.get(`/countries/getWorldCountries`);
  //   return response.data;
  // }

  // static async getStatesName(countryCode) {
  //   const response = await HTTPClient.get(
  //     `/countries/getAllStatesByCountryCode/${countryCode}`,
  //   );
  //   return response.data;
  // }

  // static async getJobs() {
  //   const response = await HTTPClient.get(`/countries/getjobs
  //   `);
  //   return response.data;
  // }

  // static async profileUpdate(userId, data) {
  //   const response = await HTTPClient.put(`/user/update/${userId}`, data);
  //   return response.data;
  // }
  // static async uploadImage(data) {
  //   const response = await HTTPClient.formDataPost(
  //     `/user/createUser-Image`,
  //     data,
  //   );
  //   return response.data;
  // }

  // static async forgotPassword(data) {
  //   const response = await HTTPClient.post(`/auth/forgot/password`, data);
  //   return response.data;
  // }

  // static async getUserProfileDetail() {
  //   const response = await HTTPClient.get(`/user/prrofile/user`);
  //   return response.data;
  // }

  // static async createUserProfileImage(data) {
  //   const response = await HTTPClient.post(`/user/createUser-Image`, data);
  //   return response.data;
  // }

  // static async createAdmin(data) {
  //   const response = await HTTPClient.post(`/user/create-admin-user`, data);
  //   return response.data;
  // }

  // static async getUserByRoleId(roleId) {
  //   const response = await HTTPClient.get(`/user/users_by_role/${roleId}`);
  //   return response.data;
  // }

  // static async getAllRoles() {
  //   const response = await HTTPClient.get(`/user/role/allroles`);
  //   return response.data;
  // }

  // static async getAllRoles(page, limit) {
  //   const response = await HTTPClient.get(
  //     `/user/users/all_users?page=${page}&limit=${limit}`,
  //   );
  //   return response.data;
  // }

  // static async getAllUsers(page, limit) {
  //   const response = await HTTPClient.get(
  //     `/user/users/all_users?page=${page}&limit=${limit}`,
  //   );
  //   return response.data;
  // }
}
