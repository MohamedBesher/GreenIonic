"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// export class User{
// 	Email:string="administrator";
// 	Password:string="Pa$$w0rd";
// }
var loginViewModel = (function () {
    // RememberMe:boolean;
    function loginViewModel(Email, Password) {
        if (Email === void 0) { Email = ""; }
        if (Password === void 0) { Password = ""; }
        this.Email = "administrator";
        this.Password = "Pa$$w0rd";
        this.Email = Email;
        this.Password = Password;
    }
    return loginViewModel;
}());
exports.loginViewModel = loginViewModel;
var registerViewModel = (function () {
    function registerViewModel(FirstName, LastName, Email, PhoneNumber, Password, ConfirmPassword, CountryId, CountryName, Gender) {
        if (FirstName === void 0) { FirstName = ""; }
        if (LastName === void 0) { LastName = ""; }
        if (Email === void 0) { Email = ""; }
        if (PhoneNumber === void 0) { PhoneNumber = ""; }
        if (Password === void 0) { Password = ""; }
        if (ConfirmPassword === void 0) { ConfirmPassword = ""; }
        if (CountryId === void 0) { CountryId = ""; }
        if (CountryName === void 0) { CountryName = ""; }
        if (Gender === void 0) { Gender = false; }
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Email = Email;
        this.PhoneNumber = PhoneNumber;
        this.Password = Password;
        this.ConfirmPassword = ConfirmPassword;
        this.CountryId = CountryId;
        this.CountryName = CountryName;
        this.Gender = Gender;
    }
    return registerViewModel;
}());
exports.registerViewModel = registerViewModel;
var ForgotPasswordViewModel = (function () {
    function ForgotPasswordViewModel(Email) {
        if (Email === void 0) { Email = ""; }
        this.Email = Email;
    }
    return ForgotPasswordViewModel;
}());
exports.ForgotPasswordViewModel = ForgotPasswordViewModel;
var ResetPasswordViewModel = (function () {
    function ResetPasswordViewModel(Email, Password, ConfirmPassword, Code) {
        if (Email === void 0) { Email = ""; }
        if (Password === void 0) { Password = ""; }
        if (ConfirmPassword === void 0) { ConfirmPassword = ""; }
        if (Code === void 0) { Code = ""; }
        this.Email = Email;
        this.Password = Password;
        this.ConfirmPassword = ConfirmPassword;
        this.Code = Code;
    }
    return ResetPasswordViewModel;
}());
exports.ResetPasswordViewModel = ResetPasswordViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxxQkFBcUI7QUFDckIsaUNBQWlDO0FBQ2pDLCtCQUErQjtBQUMvQixJQUFJO0FBQ0o7SUFJSSxzQkFBc0I7SUFDdEIsd0JBQVksS0FBVSxFQUFDLFFBQWE7UUFBeEIsc0JBQUEsRUFBQSxVQUFVO1FBQUMseUJBQUEsRUFBQSxhQUFhO1FBSHBDLFVBQUssR0FBUSxlQUFlLENBQUM7UUFDN0IsYUFBUSxHQUFRLFVBQVUsQ0FBQztRQUd2QixJQUFJLENBQUMsS0FBSyxHQUFDLEtBQUssQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFDLFFBQVEsQ0FBQztJQUUxQixDQUFDO0lBQ04scUJBQUM7QUFBRCxDQUFDLEFBVkQsSUFVQztBQVZZLHdDQUFjO0FBVzNCO0lBV0ksMkJBQ0ksU0FBWSxFQUNaLFFBQWEsRUFDYixLQUFVLEVBQ1YsV0FBZ0IsRUFDaEIsUUFBYSxFQUNiLGVBQW1CLEVBQ25CLFNBQWMsRUFDZCxXQUFjLEVBQ2QsTUFBWTtRQVJaLDBCQUFBLEVBQUEsY0FBWTtRQUNaLHlCQUFBLEVBQUEsYUFBYTtRQUNiLHNCQUFBLEVBQUEsVUFBVTtRQUNWLDRCQUFBLEVBQUEsZ0JBQWdCO1FBQ2hCLHlCQUFBLEVBQUEsYUFBYTtRQUNiLGdDQUFBLEVBQUEsb0JBQW1CO1FBQ25CLDBCQUFBLEVBQUEsY0FBYztRQUNkLDRCQUFBLEVBQUEsZ0JBQWM7UUFDZCx1QkFBQSxFQUFBLGNBQVk7UUFDUixJQUFJLENBQUMsU0FBUyxHQUFDLFNBQVMsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFDLFFBQVEsQ0FBQztRQUN2QixJQUFJLENBQUMsS0FBSyxHQUFDLEtBQUssQ0FBQztRQUNqQixJQUFJLENBQUMsV0FBVyxHQUFDLFdBQVcsQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUSxHQUFDLFFBQVEsQ0FBQztRQUN2QixJQUFJLENBQUMsZUFBZSxHQUFDLGVBQWUsQ0FBQztRQUNyQyxJQUFJLENBQUMsU0FBUyxHQUFDLFNBQVMsQ0FBQztRQUN6QixJQUFJLENBQUMsV0FBVyxHQUFDLFdBQVcsQ0FBQztRQUM3QixJQUFJLENBQUMsTUFBTSxHQUFDLE1BQU0sQ0FBQztJQUczQixDQUFDO0lBRUwsd0JBQUM7QUFBRCxDQUFDLEFBbENELElBa0NDO0FBbENZLDhDQUFpQjtBQW1DOUI7SUFHSyxpQ0FBWSxLQUFVO1FBQVYsc0JBQUEsRUFBQSxVQUFVO1FBQ2YsSUFBSSxDQUFDLEtBQUssR0FBQyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUNOLDhCQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7QUFOWSwwREFBdUI7QUFRcEM7SUFNSSxnQ0FDSSxLQUFVLEVBQ1YsUUFBYSxFQUNiLGVBQW1CLEVBQ25CLElBQVM7UUFIVCxzQkFBQSxFQUFBLFVBQVU7UUFDVix5QkFBQSxFQUFBLGFBQWE7UUFDYixnQ0FBQSxFQUFBLG9CQUFtQjtRQUNuQixxQkFBQSxFQUFBLFNBQVM7UUFDTCxJQUFJLENBQUMsS0FBSyxHQUFDLEtBQUssQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFDLFFBQVEsQ0FBQztRQUN2QixJQUFJLENBQUMsZUFBZSxHQUFDLGVBQWUsQ0FBQztRQUNyQyxJQUFJLENBQUMsSUFBSSxHQUFDLElBQUksQ0FBQztJQUl2QixDQUFDO0lBQ0wsNkJBQUM7QUFBRCxDQUFDLEFBbkJELElBbUJDO0FBbkJZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vLyBleHBvcnQgY2xhc3MgVXNlcntcclxuLy8gXHRFbWFpbDpzdHJpbmc9XCJhZG1pbmlzdHJhdG9yXCI7XHJcbi8vIFx0UGFzc3dvcmQ6c3RyaW5nPVwiUGEkJHcwcmRcIjtcclxuLy8gfVxyXG5leHBvcnQgY2xhc3MgbG9naW5WaWV3TW9kZWxcclxue1xyXG4gICAgRW1haWw6c3RyaW5nPVwiYWRtaW5pc3RyYXRvclwiO1xyXG4gICAgUGFzc3dvcmQ6c3RyaW5nPVwiUGEkJHcwcmRcIjtcclxuICAgIC8vIFJlbWVtYmVyTWU6Ym9vbGVhbjtcclxuICAgIGNvbnN0cnVjdG9yKEVtYWlsID0gXCJcIixQYXNzd29yZCA9IFwiXCIsKXtcclxuICAgICAgICB0aGlzLkVtYWlsPUVtYWlsO1xyXG4gICAgICAgIHRoaXMuUGFzc3dvcmQ9UGFzc3dvcmQ7XHJcblxyXG4gICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgcmVnaXN0ZXJWaWV3TW9kZWxcclxue1xyXG4gICAgRmlyc3ROYW1lIDpzdHJpbmc7XHJcbiAgICBMYXN0TmFtZSA6c3RyaW5nO1xyXG4gICAgRW1haWwgOnN0cmluZztcclxuICAgIFBob25lTnVtYmVyIDpzdHJpbmc7XHJcbiAgICBQYXNzd29yZDpzdHJpbmc7XHJcbiAgICBDb25maXJtUGFzc3dvcmQ6c3RyaW5nO1xyXG4gICAgQ291bnRyeUlkIDpzdHJpbmc7XHJcbiAgICBDb3VudHJ5TmFtZSA6c3RyaW5nO1xyXG4gICAgR2VuZGVyOmJvb2xlYW47XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBGaXJzdE5hbWU9XCJcIiAsXHJcbiAgICAgICAgTGFzdE5hbWUgPSBcIlwiLFxyXG4gICAgICAgIEVtYWlsID0gXCJcIixcclxuICAgICAgICBQaG9uZU51bWJlciA9IFwiXCIsXHJcbiAgICAgICAgUGFzc3dvcmQgPSBcIlwiLFxyXG4gICAgICAgIENvbmZpcm1QYXNzd29yZD0gXCJcIixcclxuICAgICAgICBDb3VudHJ5SWQgPSBcIlwiLFxyXG4gICAgICAgIENvdW50cnlOYW1lPVwiXCIsXHJcbiAgICAgICAgR2VuZGVyPWZhbHNlKXtcclxuICAgICAgICAgICAgdGhpcy5GaXJzdE5hbWU9Rmlyc3ROYW1lO1xyXG4gICAgICAgICAgICB0aGlzLkxhc3ROYW1lPUxhc3ROYW1lO1xyXG4gICAgICAgICAgICB0aGlzLkVtYWlsPUVtYWlsO1xyXG4gICAgICAgICAgICB0aGlzLlBob25lTnVtYmVyPVBob25lTnVtYmVyO1xyXG4gICAgICAgICAgICB0aGlzLlBhc3N3b3JkPVBhc3N3b3JkO1xyXG4gICAgICAgICAgICB0aGlzLkNvbmZpcm1QYXNzd29yZD1Db25maXJtUGFzc3dvcmQ7XHJcbiAgICAgICAgICAgIHRoaXMuQ291bnRyeUlkPUNvdW50cnlJZDtcclxuICAgICAgICAgICAgdGhpcy5Db3VudHJ5TmFtZT1Db3VudHJ5TmFtZTtcclxuICAgICAgICAgICAgdGhpcy5HZW5kZXI9R2VuZGVyO1xyXG5cclxuXHJcbiAgICB9XHJcbiAgICAgICAgXHJcbn1cclxuZXhwb3J0IGNsYXNzIEZvcmdvdFBhc3N3b3JkVmlld01vZGVsXHJcbntcclxuICAgICBFbWFpbCA6c3RyaW5nO1xyXG4gICAgIGNvbnN0cnVjdG9yKEVtYWlsID0gXCJcIil7XHJcbiAgICAgICAgICAgIHRoaXMuRW1haWw9RW1haWw7XHJcbiAgICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUmVzZXRQYXNzd29yZFZpZXdNb2RlbFxyXG57XHJcbiAgICBFbWFpbCA6c3RyaW5nO1xyXG4gICAgUGFzc3dvcmQgOnN0cmluZztcclxuICAgIENvbmZpcm1QYXNzd29yZCA6c3RyaW5nO1xyXG4gICAgQ29kZSA6c3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgRW1haWwgPSBcIlwiLFxyXG4gICAgICAgIFBhc3N3b3JkID0gXCJcIixcclxuICAgICAgICBDb25maXJtUGFzc3dvcmQ9IFwiXCIsXHJcbiAgICAgICAgQ29kZSA9IFwiXCIpe1xyXG4gICAgICAgICAgICB0aGlzLkVtYWlsPUVtYWlsO1xyXG4gICAgICAgICAgICB0aGlzLlBhc3N3b3JkPVBhc3N3b3JkO1xyXG4gICAgICAgICAgICB0aGlzLkNvbmZpcm1QYXNzd29yZD1Db25maXJtUGFzc3dvcmQ7XHJcbiAgICAgICAgICAgIHRoaXMuQ29kZT1Db2RlO1xyXG5cclxuXHJcblxyXG4gICAgfVxyXG59Il19