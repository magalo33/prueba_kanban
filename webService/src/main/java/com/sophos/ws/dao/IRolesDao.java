/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sophos.ws.dao;

import com.sophos.ws.domain.Rol;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author Magalo
 */
public interface IRolesDao extends JpaRepository<Rol, Long>{
    
}
