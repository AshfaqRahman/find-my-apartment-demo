export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      user: {
        Row: {
          name: string
          phone_no: string 
          username: string 
          email: string 
          role: string 
        }
        Insert: {
          name?: string
          phone_no?: string 
          username?: string 
          email?: string 
          role?: string 
        }
        Update: {
          name?: string
          phone_no?: string 
          username?: string 
          email?: string 
          role?: string 
        }
      },
      apartment: {
        Row: {
          aprt_id: string
          username: string
          zone: string 
          area_sqft: number 
          floor: number 
          num_bed: number
          num_wash: number
          status: string
          price: number
          addr_id: number | null
          description: string | null
        } | null
        Insert: {
          aprt_id: string
          username: string
          zone: string 
          area_sqft: number 
          floor: number 
          num_bed: number
          num_wash: number
          status: string
          price: number
          addr_id: number | null
          description: string | null
        }
        Update: {
          aprt_id: string
          username: string
          zone: string 
          area_sqft: number 
          floor: number 
          num_bed: number
          num_wash: number
          status: string
          price: number
          addr_id: number | null
          description: string | null
        }
      },
      address: {
        Row: {
          addr_id: number 
          latitude: number
          longitude: number
          division: string
          district: string
          area: string
          street: string | null
          house_no: string | null
          geocode_info: string | null
        }
      }
      
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}