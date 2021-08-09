require './config/environment'
require './app/models/user'

class UsersController < ApplicationController

    def new
    end

    def create
        @user = User.create(user_params)
        return redirect_to controller: 'users', action: 'new' unless @user.save
        session[:user_id] = @user.id
        redirect_to controller: 'wines', action: 'index'
    end

    private

    def user_params
        params.require(:user).permit(:first_name, :last_name, :password, :password_confirmation)
    end
end
