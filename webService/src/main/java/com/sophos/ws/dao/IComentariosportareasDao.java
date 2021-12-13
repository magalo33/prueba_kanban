package com.sophos.ws.dao;

import com.sophos.ws.domain.Comentariosportarea;
import com.sophos.ws.domain.Tarea;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IComentariosportareasDao extends JpaRepository<Comentariosportarea,Long>{

    @Transactional
    @Modifying
    @Query("DELETE FROM Comentariosportarea c WHERE c.idtarea=:idtarea")
    void eliminarComentariosPorTarea(@Param("idtarea") Long idtarea);    
    
}
