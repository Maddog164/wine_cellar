# require './config/environment'
# require './app/models/user'

class Api::V1::UsersController < ApplicationController

    # def new
    # end

    def index
        # binding.pry
        @users = User.all
        render json: @users
    end

    def show
        binding.pry
        @user = User.find_by(:id => params[:id].to_i)
        render json: @user
    end

    def create
        user = User.new(user_params)
        if user.save
            render json: user
        else
            render json: user.errors, status: :unprocessable_entity
        end
    end

    def update
        if @user.update(user_params)
            render json: @user
        else
            render json: @user.errors, status: :unprocessable_entity
        end
    end

    private

    def user_params
        # params.require(:user).permit(:first_name, :last_name)
        params.require(:user).permit(:first_name, :last_name)
        # params.require(:user).permit(:first_name, :last_name, :password, :password_confirmation)
    end
end
