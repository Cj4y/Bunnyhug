class Account < ApplicationRecord
    has_one :user

    
    
    private # if pwd is blank, create a random password. 
    def secure_password_encrypt 
        if password_digest.blank? self.password = SecureRandom.urlsafe_base64(16)
        end
    end
end
